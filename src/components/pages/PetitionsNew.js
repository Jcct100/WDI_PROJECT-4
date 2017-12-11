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
      abstract: ''
    }
  }

handleChange = ({ target: { name, value } }) => {
  const petition = Object.assign({}, this.state.petition, { [name]: value });
  this.setState({ petition });
}

handleSubmit = (e) => {
  e.preventDefault();

  Axios
    .post('/api/petitions', this.state.petition, {
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`}
    })
    .then(() => this.props.history.push('/profile'))
    .catch(err => console.log(err));
}

render() {
  return (
    <PetitionsForm
      handleSubmit={ this.handleSubmit }
      handleChange={ this.handleChange }
      petition= { this.state.petition }
    />
  );
}
}

export default UserNew;
