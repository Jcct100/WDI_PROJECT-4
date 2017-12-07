import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';

class PetitionShow extends React.Component {
  state = {
    petition: []
  }

  componentDidMount() {
    Axios
      .get(`/api/petitions/${this.props.match.params.id}`)
      .then(res => this.setState({ petition: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.petition.title);
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.petition.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.petition.title}</h3>
          <h4>{this.state.petition.description}</h4>
          <h4>{this.state.petition.website}</h4>
          <h4>{this.state.petition.number_of_signatures}</h4>
        </div>
      </div>
    );
  }
}

export default PetitionShow;
