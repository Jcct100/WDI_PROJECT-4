import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Axios from 'axios';
import Promise from 'bluebird';
import MultiSelect from '../utility/MultiSelect';

class WelcomePage extends React.Component {
  state = {
    goals: [],
    petitions: [],
    value: []
  }

  componentDidMount() {
    const promises = {
      goals: Axios.get('/api/goals').then(res => res.data),
      petitions: Axios.get('/api/petitions', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
        .then(res => res.data)
    };

    Promise.props(promises)
      .then(data => {
        const goalList = data.goals.map(goal => {
          return { label: goal.name, value: goal.id};
        });

        this.setState({ goals: goalList, petitions: data.petitions });
      })
      .catch(err => console.log(err));
  }

handleSelectChange = (value) => {
  console.log(value);
  this.setState({ value });
}

runFilter() {
  if (!this.state.value.length) return this.state.petitions;

  return this.state.petitions.filter(petition => {
    return petition.goals.filter(goal => {
      return this.state.value.map(value => value.id).indexOf(goal.id) >= 0;
    }).length;
  });
}

render() {
  const filters = this.state.value.map(val => val.value);
  return(
    <div>
      <h1>Hi, Welcome</h1>
      <h2>Are you ready to change the world?</h2>
      <p>YES..Please choose actions:</p>

      <MultiSelect
        value={this.state.value}
        options={this.state.goals} className="welcome-input"
        handleSelectChange={this.handleSelectChange}
      />

      {/* { petitions.map(petition => {
        return(
          <div key={petition.id} className="col-md-4 col-sm-6 col-xs-12">
            <div>
              <Link to={`/petitions/${petition.id}`}>{petition.title}</Link>
            </div>
          </div>
        );
      }) } */}

      <Link className="searchButton" to={`/petitions?filter=${filters}`}>
        <i className="fa fa-search-plus fa-2x" aria-hidden="true"></i>
      </Link>
      {''}
      { Auth.isAuthenticated() && <Link className="createButton" to="/petitions/new" >
        <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
      </Link> }
      {''}
      <p> Not yet? ...Learn more:
      </p>
    </div>
  );
}

}


export default WelcomePage;
