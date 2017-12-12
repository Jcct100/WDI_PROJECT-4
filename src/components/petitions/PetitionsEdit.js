import React from 'react';
import Axios from 'axios';


import PetitionsForm from './PetitionsForm';
import Auth from '../../lib/Auth';


class PetitionsEdit extends React.Component {
  state = {
    petition: {
      title: '',
      description: '',
      website: '',
      image: '',
      endDate: ''
    }
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    Axios
      .get(`/api/petitions/${this.props.match.params.id}`)
      .then(res => this.setState({ petition: res.data }))
      .catch(err => console.log(err));
  }

handleChange = ({ target: { name, value } }) => {
  console.log(petition);
  const petition = Object.assign({}, this.state.petition, { [name]: value });
  this.setState({ petition });
}

handleSubmit = (e) => {
  e.preventDefault();

  Axios
    .put(`/api/petitions/${this.props.match.params.id}`, this.state.petition,
      { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
    .then(this.props.history.push(`/petitions/${this.props.match.params.id}`))
    .catch(err => console.log(err));
}

render() {
  return(
    <PetitionsForm
      petition={this.state.petition}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
    />
  );
}


}


export default PetitionsEdit;
