import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  state = {
    petitions: []
  }

  componentDidMount() {
    Axios
      .get('/api/petitions')
      .then(res => this.setState({ petitions: res.data }))
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h2>Number of Signatures:</h2>
        <h2>Number of Petitions:</h2>
        { this.state.petitions.map(petition =>
          <div key={petition.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
            <h2> { petition.label } </h2>
            <img src={petition.image} className="img-responsive" />
          </div>
        )}
      </div>
    );

  }

}

export default UserShow;
