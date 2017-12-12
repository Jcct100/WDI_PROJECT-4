import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class UserShow extends React.Component {
  state = {
    petitions: []
  }

  componentWillMount() {
    Axios
      .get('/api/petitions')
      .then(res => this.setState({ petitions: res.data }))
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  deletePetition = ({ id }) => {
    Axios
      .delete(`/api/petitions/${id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => {
        const petitions = this.state.petitions.filter(petition => petition.id !== id);
        this.setState({ petitions });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <BackButton />
        { this.state.petitions.map(petition =>
          <div key={petition.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
            <p> { petition.title } </p>
            <p>Number of Signatures: { petition.signees.length }</p>
            <Link to={`/petitions/${petition.id}`} className="standard-button">
              <img src={petition.image} className="img-responsive" />
            </Link>
            { Auth.isAuthenticated() && <Link to={`/petitions/${petition.id}/edit`} className="standard-button">
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit
            </Link> }
            { Auth.isAuthenticated() && <button className="main-button" onClick={() => this.deletePetition(petition)}>
              <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </button> }
          </div>
        )}
        <button className="main-button">
          { Auth.isAuthenticated() && <Link to="/petitions/new">
            <i className="fa fa-plus" aria-hidden="true"></i>Create
          </Link> }
        </button>
      </div>
    );

  }

}

export default UserShow;
