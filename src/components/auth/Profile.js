import React      from 'react';
import Axios      from 'axios';
import { Link }   from 'react-router-dom';
import BackButton from '../utility/BackButton';
import Auth       from '../../lib/Auth';
import Slider     from 'react-slick';

import moment from 'moment';

class UserShow extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }, () => console.log(this.state.user.petitions)))
      .catch(err => console.log(err));
  }

  canSee(createdBy) {
    const payload = Auth.getPayload();
    // console.log(payload);
    if (!payload) return false;
    //if payload and payload.userId is true return true as below.
    if (payload && payload.userId) {
      return payload.userId === createdBy;
    }
  }

  deletePetition = ({ id }) => {
    Axios
      .delete(`/api/petitions/${id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => {
        const petitions = this.state.user.petitions.filter(petition => petition.id !== id);
        this.setState({ user: { petitions }});
      })
      .catch(err => console.log(err));
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0
    };
    return(
      <div>
        <BackButton />
        {/* this will make sure that the this.state.user has data first before rendering the below */}

        { this.state.user &&
        <div>
          <h4>UserName:</h4>
          <h4><strong>{this.state.user.username}</strong></h4>
          <h4>Create petitions here:</h4>
          <button className="main-button">
            { Auth.isAuthenticated() && <Link to="/petitions/new">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Link> }
          </button>
          <main className="image-tile col-md-4 col-sm-6 col-xs-12">
            <h4>List of petitions here:</h4>
            <Slider ref={c => this.slider = c } {...settings}>
              { this.state.user.petitions && this.state.user.petitions.map(petition =>
                <div key={petition.id}>
                  <h3>
                    <Link to={`/petitions/${petition.id}`} className="standard-button">
                      <img src={petition.image} className="img-responsive" />
                    </Link>
                  </h3>
                  { this.canSee(petition.createdBy) &&
                    <div>
                      <button className="main-button">
                        <Link to={`/petitions/${petition.id}/edit`} className="standard-button">
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                      </button>
                      <button className="main-button" onClick={() => this.deletePetition(petition)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  }
                  <p>{ petition.title }</p>
                  <p>{ petition.abstract }</p>
                  <p>{moment(petition.endDate).format('MMMM Do YYYY')}</p>
                </div>
              )}
            </Slider>
            <div style={{textAlign: 'center'}}>
              <button className='button' onClick={this.previous}>Previous</button>
              <button className='button' onClick={this.next}>Next</button>
            </div>
          </main>
        </div>
        }

      </div>
    );
  }
}

export default UserShow;


// { this.state.user.petitions && this.state.user.petitions.map((petition) =>
// <main key={petition.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
// {petition.abstract}
// </main>
// )}

// ___________________________________________________________________________________________

// import React from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';
// import BackButton from '../utility/BackButton';
// import Auth from '../../lib/Auth';
//
// class UserShow extends React.Component {
//   state = {
//     users: []
//   }
//
//     componentWillMount() {
//       // console.log(this.stat)
//       // Axios
//       //   .get('/api/petitions')
//       //   .then(res => this.setState({ petitions: res.data }))
//       //   .then(res => console.log(res.data))
//       //   .catch(err => console.log(err));
//
//
//   // componentWillMount() {
//   //   console.log(this.props);
//     Axios
//       .get('/api/users')
//       .then(res => this.setState({ users: res.data }))
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err));
//
//   // componentWillMount() {
//   //   console.log(this.props.match.params.id);
//     // Axios
//     //   .get(`/api/users/${this.props.match.params.id}`)
//     //   .then(res => {
//     //     this.setState({ users: res.data });
//     //   })
//     //   .then(res => console.log(res.data))
//     //   .catch(err => console.log(err));
//
//         }
//
//     // console.log(this.state.petitions);
//   //   Axios
//   //     .get('/api/petitions')
//   //     .then(res => this.setState({ petitions: res.data }))
//   //     .then(res => console.log(res.data))
//   //     .catch(err => console.log(err));
//   //
//   // }
//
//   // deletePetition = ({ id }) => {
//   //   Axios
//   //     .delete(`/api/petitions/${id}`, {
//   //       headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
//   //     })
//   //     .then(() => {
//   //       const petitions = this.state.petitions.filter(petition => petition.id !== id);
//   //       this.setState({ petitions });
//   //     })
//   //     .catch(err => console.log(err));
//   // }
//
//   render() {
//     const a = this.state.users;
//     console.log(a);
//     return(
//       <div>
//         { this.state.users.map(user =>
//           <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
//             <p> { user.title } </p>
//           </div>
//         )}
//       </div>
//       // <div>
//       //    <BackButton />
//       //   { this.state.petitions.map(petition =>
//       //     <div key={petition.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
//       //       <p> { petition.title } </p>
//       //        <p>Number of Signatures: { petition.signees.length }</p>
//       //       <Link to={`/petitions/${petition.id}`} className="standard-button">
//       //         <img src={petition.image} className="img-responsive" />
//       //       </Link>
//       //       { Auth.isAuthenticated() && <Link to={`/petitions/${petition.id}/edit`} className="standard-button">
//       //         <i className="fa fa-pencil" aria-hidden="true"></i>Edit
//       //       </Link> }
//       //       { Auth.isAuthenticated() && <button className="main-button" onClick={() => this.deletePetition(petition)}>
//       //         <i className="fa fa-trash" aria-hidden="true"></i>Delete
//       //       </button> }
//       //     </div>
//       //   )}
//       //   <button className="main-button">
//       //     { Auth.isAuthenticated() && <Link to="/petitions/new">
//       //       <i className="fa fa-plus" aria-hidden="true"></i>Create
//       //     </Link> }
//       //   </button>
//       // </div>
//     );
//
//   }
//
// }
//
// export default UserShow;

// ___________________________________________________________________________________________

// import React from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';
// import BackButton from '../utility/BackButton';
// import Auth from '../../lib/Auth';
//
// class UserShow extends React.Component {
//   state = {
//     petitions: []
//   }
//
//   componentWillMount() {
// // console.log('id', this.props.match.params.id);
// console.log(this);
// //when you console.log this you are getting the instance of a class
// //you can call the state anything in this case you have called it petitionss
// //this becomes whatever you call the request to the backend in the routes. in this case it is user.
// //whatever you sent request for the api and get back that is the res.data.
// //the res.data becomes the data you have requested.which is the index which is all of the petitions.
//     Axios
//       .get('/api/petitions')
//       // .get(`/api/users/${this.props.match.params.id}`)
//       .then(res => {
//         console.log('res', res);
//         console.log('res.data', res.data);
//         this.setState({ petitions: res.data });
//       })
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err));
//   }
//
//   // deletePetition = ({ id }) => {
//   //   Axios
//   //     .delete(`/api/petitions/${id}`, {
//   //       headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
//   //     })
//   //     .then(() => {
//   //       const petitions = this.state.petitions.filter(petition => petition.id !== id);
//   //       this.setState({ petitions });
//   //     })
//   //     .catch(err => console.log(err));
//   // }
//
//   render() {
//     const a = this.state.petitions;
//     console.log(a);
//     return(
//       <div>
//         {/* <BackButton />
//         { this.state.petitions.map(petition =>
//           <div key={petition.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
//             <p> { petition.title } </p>
//             <p>Number of Signatures: { petition.signees.length }</p>
//             <Link to={`/petitions/${petition.id}`} className="standard-button">
//               <img src={petition.image} className="img-responsive" />
//             </Link>
//             { Auth.isAuthenticated() && <Link to={`/petitions/${petition.id}/edit`} className="standard-button">
//               <i className="fa fa-pencil" aria-hidden="true"></i>Edit
//             </Link> }
//             { Auth.isAuthenticated() && <button className="main-button" onClick={() => this.deletePetition(petition)}>
//               <i className="fa fa-trash" aria-hidden="true"></i>Delete
//             </button> }
//           </div>
//         )}
//         <button className="main-button">
//           { Auth.isAuthenticated() && <Link to="/petitions/new">
//             <i className="fa fa-plus" aria-hidden="true"></i>Create
//           </Link> }
//         </button> */}
//       </div>
//     );
//
//   }
//
// }
//
// export default UserShow;
//
// ___________________________________________________________________________________________
//
// import React from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';
// import BackButton from '../utility/BackButton';
// import Auth from '../../lib/Auth';
//
// class UserShow extends React.Component {
//   state = {
//     petitions: []
//   }
//
//   componentWillMount() {
//     Axios
//       .get('/api/petitions')
//       .then(res => this.setState({ petitions: res.data }))
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err));
//   }
//
//   deletePetition = ({ id }) => {
//     Axios
//       .delete(`/api/petitions/${id}`, {
//         headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
//       })
//       .then(() => {
//         const petitions = this.state.petitions.filter(petition => petition.id !== id);
//         this.setState({ petitions });
//       })
//       .catch(err => console.log(err));
//   }
//
//   render() {
//     return(
//       <div>
//         <BackButton />
//         { this.state.petitions.map(petition =>
//           <div key={petition.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
//             <p> { petition.title } </p>
//             <p>Number of Signatures: { petition.signees.length }</p>
//             <Link to={`/petitions/${petition.id}`} className="standard-button">
//               <img src={petition.image} className="img-responsive" />
//             </Link>
//             { Auth.isAuthenticated() && <Link to={`/petitions/${petition.id}/edit`} className="standard-button">
//               <i className="fa fa-pencil" aria-hidden="true"></i>Edit
//             </Link> }
//             { Auth.isAuthenticated() && <button className="main-button" onClick={() => this.deletePetition(petition)}>
//               <i className="fa fa-trash" aria-hidden="true"></i>Delete
//             </button> }
//           </div>
//         )}
//         <button className="main-button">
//           { Auth.isAuthenticated() && <Link to="/petitions/new">
//             <i className="fa fa-plus" aria-hidden="true"></i>Create
//           </Link> }
//         </button>
//       </div>
//     );
//
//   }
//
// }
//
// export default UserShow;
