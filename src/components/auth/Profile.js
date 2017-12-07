import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
      .delete(`/api/petitions/${id}`)
      .then(() => {
        const petitions = this.state.petitions.filter(petition => petition.id !== id);
        this.setState({ petitions });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        { this.state.petitions.map(petition =>
          <div key={petition.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
            <p> { petition.title } </p>
            <p>Number of Signatures: { petition.number_of_signatures }</p>
            <Link to={`/petitions/${petition.id}`} className="standard-button">
              <img src={petition.image} className="img-responsive" />
            </Link>
            <Link to={`/petitions/${petition.id}/edit`} className="standard-button">
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit
            </Link>
            <button className="main-button" onClick={() => this.deletePetition(petition)}>
              <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </button>
          </div>
        )}
        <button className="main-button">
          {/* <Link to="/petitions"> */}
          <Link to="/UserNew/new">
            <i className="fa fa-plus" aria-hidden="true"></i>Create
          </Link>
        </button>
      </div>
    );

  }

}

export default UserShow;
