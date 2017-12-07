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

  deleteFood = () => {
    console.log(this.props.match.params.id);
    Axios
      .delete(`/api/foods/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        { this.state.petitions.map(petition =>
          <div key={petition.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
            <p> { petition.title } </p>
            <p>Number of Signatures: { petition.number_of_signatures }</p>
            <img src={petition.image} className="img-responsive" />
            <Link to={`/petitions/${petition.id}/edit`} className="standard-button">
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit
            </Link>
            <button className="main-button" onClick={this.deleteFood}>
              <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </button>
          </div>
        )}
      </div>
    );

  }

}

export default UserShow;
