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
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        { this.state.petitions.map(petition =>
          <Link key={petition.id} to={`/petitions/${petition.id}`}>
            <div className="image-tile col-md-4 col-sm-6 col-xs-12">
              <img src={petition.image} className="img-responsive" />
              <h2> { petition.label } </h2>
              <h2> number of signatures: { petition.number_of_signatures } </h2>
            </div>
          </Link>
        )}
      </div>
    );

  }

}

export default PetitionIndex;
