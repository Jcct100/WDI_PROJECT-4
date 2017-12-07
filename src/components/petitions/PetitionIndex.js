import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class PetitionIndex extends React.Component {
  state = {
    petitions: []
  }

  componentDidMount() {
    Axios
      .get('/api/petitions')
      .then(res => this.setState({ petitions: res.data }))
      // .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        { this.state.petitions.map(petition =>
          <div key={petition.id} to={`/petitions/${petition.id}`}>
            <Link to={`/petitions/${petition.id}`}>  <img src={petition.image} className="img-responsive" /> </Link>
            <h2> { petition.title } </h2>
            <p> { petition.abstract }</p>
            <h2> number of signatures: { petition.number_of_signatures } </h2>
            <Link to={`/petitions/${petition.id}`}>Read more</Link>
            {/* <button className="main-button">
              <Link to="/profile">
                <i className="fa fa-plus" aria-hidden="true">User profile</i>Search
              </Link>
            </button> */}
          </div>
        )}
      </div>
    );

  }

}

export default PetitionIndex;
