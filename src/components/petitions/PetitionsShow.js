import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';
import BackButton from '../utility/BackButton';

class PetitionsShow extends React.Component {
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
    const petition = this.state.petition;
    console.log(petition);
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.petition.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.petition.title}</h3>
          <h4>{this.state.petition.description}</h4>
          <u> <a href={this.state.petition.website}>website </a> </u>
        </div>
        <BackButton />
      </div>
    );
  }
}

export default PetitionsShow;
