



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
      endDate: '',
      goals: []
    },
    removeSelected: true,
    goals: [],
    value: [],
    errors: {}
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    Axios
      .get(`/api/petitions/${this.props.match.params.id}`)
      .then(res => this.setState({ petition: res.data }))
      .catch(err => console.log(err));

    Axios
      .get('/api/goals')
      .then(res => {
        const goals = res.data.map(goal => {
          return { label: goal.name, value: goal.name, id: goal.id };
        });
        this.setState({goals});
      })
      .catch(err => console.log(err));

  }

  handleSelectChange = (value) => {
    // console.log(value);
    this.setState({ value });
  }



handleChange = ({ target: { name, value } }) => {
  console.log(petition);
  const petition = Object.assign({}, this.state.petition, { [name]: value });
  this.setState({ petition });
}

handleSubmit = (e) => {
  e.preventDefault();
  const userGoals = this.state.value.map(goal => goal.id);
  const petition = Object.assign({}, this.state.petition, { goals: userGoals });
  Axios
    .post('/api/petitions', petition, {
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`}
    })
    .then(() => this.props.history.push(`/profile/${Auth.getPayload().userId}`))
    .catch(err => console.log(err));

  Axios
    .put(`/api/petitions/${this.props.match.params.id}`, this.state.petition,
      { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
    .then(this.props.history.push(`/profile/${this.props.match.params.id}`))
    // .then(this.props.history.replace(`/profile/${this.props.match.params.id}`))
    .catch(err => console.log(err));
}

render() {
  const a = this.state.petition.title;
  console.log(a);
  return(
    <PetitionsForm
      petition={this.state.petition}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      handleSelectChange={this.handleSelectChange}
      {...this.state}
    />
  );
}


}


export default PetitionsEdit;












//
// _________________________________________________________________________________________
//
// import React from 'react';
// import Axios from 'axios';
//
//
// import PetitionsForm from './PetitionsForm';
// import Auth from '../../lib/Auth';
//
//
// class PetitionsEdit extends React.Component {
//   state = {
//     petition: {
//       title: '',
//       description: '',
//       website: '',
//       image: '',
//       endDate: ''
//     }
//   }
//
//   componentDidMount() {
//     // console.log(this.props.match.params.id);
//     Axios
//       .get(`/api/petitions/${this.props.match.params.id}`)
//       .then(res => this.setState({ petition: res.data }))
//       .catch(err => console.log(err));
//   }
//
// handleChange = ({ target: { name, value } }) => {
//   console.log(petition);
//   const petition = Object.assign({}, this.state.petition, { [name]: value });
//   this.setState({ petition });
// }
//
// handleSubmit = (e) => {
//   e.preventDefault();
//
//   Axios
//     .put(`/api/petitions/${this.props.match.params.id}`, this.state.petition,
//       { headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
//       })
//     .then(this.props.history.push(`/profile/${this.props.match.params.id}`))
//     // .then(this.props.history.replace(`/profile/${this.props.match.params.id}`))
//     .catch(err => console.log(err));
// }
//
// render() {
//   const a = this.state.petition.title
//   console.log(a);
//   return(
//     <PetitionsForm
//       petition={this.state.petition}
//       handleSubmit={this.handleSubmit}
//       handleChange={this.handleChange}
//     />
//   );
// }
//
//
// }
//
//
// export default PetitionsEdit;
