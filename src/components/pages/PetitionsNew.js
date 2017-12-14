import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import PetitionsForm from '../petitions/PetitionsForm';

class UserNew extends React.Component {
  state = {
    petition: {
      title: '',
      description: '',
      website: '',
      image: '',
      abstract: '',
      endDate: '',
      goals: []
    },
    removeSelected: true,
    goals: [],
    value: [],
    errors: {}
  }


  componentDidMount() {
    Axios
      .get('/api/goals')
      .then(res => {
        const goals = res.data.map(goal => {
          return { label: goal.name, value: goal.name, id: goal.id };
        });
        this.setState({goals});
      })
      .catch(err => console.log(err));
  }

  handleSelectChange = (value) => {
    console.log(value);
    this.setState({ value });
  }

handleChange = ({ target: { name, value } }) => {
  const petition = Object.assign({}, this.state.petition, { [name]: value });
  this.setState({ petition });
}

handleSubmit = (e) => {
  e.preventDefault();
  const userGoals = this.state.value.map(goal => goal.id);
  const petition = Object.assign({}, this.state.petition, { goals: userGoals });
  Axios
    .post('/api/petitions', petition, {
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`}
    })
    .then(() => this.props.history.push(`/profile/${Auth.getPayload().userId}`))
    .catch(err => console.log(err));
}

render() {
  return (
    <PetitionsForm
      handleSubmit={ this.handleSubmit }
      handleChange={ this.handleChange }
      petition= { this.state.petition }
      handleSelectChange={this.handleSelectChange}
      {...this.state}
    />
  );
}
}

export default UserNew;
