import React from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';
// import BackButton from '../utility/BackButton';

import Cards, { Card } from 'react-swipe-card';

class PetitionsIndex extends React.Component {
  state = {
    petitions: []
  }

  componentDidMount() {
    Axios
      .get('/api/petitions')
      .then(res => this.setState({ petitions: res.data }))
      .catch(err => console.log(err));
  }

  right() {
    console.log('right');
  }

  left() {
    console.log('left');
  }

  end() {
    console.log('end');
  }

  render() {
    return (
      <Cards onEnd={ this.end } className='master-root'>
        {this.state.petitions.map((petition, i) =>
          <Card key={i}
            onSwipeLeft={this.left}
            onSwipeRight={this.right}>
            <h2>{ petition.title}</h2>
          </Card>
        )}
      </Cards>
    );
  }
}

export default PetitionsIndex;



// render() {
//   return (
//     <Cards onEnd={action('end')} className='master-root'>
//       { this.state.petitions.map(petition =>
//         <div key={petition.id} to={`/petitions/${petition.id}`}>
//       <Card
//         onSwipeLeft={action('swipe left')}
//         onSwipeRight={action('swipe right')}>
//       <div>
//         <Link to={`/petitions/${petition.id}`}>  <img src={petition.image} className="img-responsive" /> </Link>
//         <h2> { petition.title } </h2>
//         <p> { petition.abstract }</p>
//         <h2> number of signatures: { petition.number_of_signatures } </h2>
//         <Link to={`/petitions/${petition.id}`}>Read more</Link>
//       </div>
//           )}
//         </div>
//         </Card>
//          </Cards>
//   )
// }
//
// export default PetitionsIndex;


// __________________________________________________________
//
// import React from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';
// import BackButton from '../utility/BackButton';
//
// import Cards, { Card } from 'react-swipe-card'
//
// class PetitionsIndex extends React.Component {
//   state = {
//     petitions: []
//     // users: []
//   }
//
//   componentDidMount() {
//     Axios
//       .get('/api/petitions')
//       .then(res => this.setState({ petitions: res.data }))
//       // .then(res => console.log(res.data))
//       .catch(err => console.log(err));
//
//     Axios
//       .get('/api/users')
//       .then(res => this.setState({ users: res.data }))
//       .catch(err => console.log(err));
//
//   }
//
//   render() {
//     // const users = this.state.users;
//     return(
//       <div>
//         {/* { users.map(user =>
//           <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
//             <Link to={`/profile/${user.id}`}>
//               <h2>{user.username}</h2>
//             </Link>
//           </div>
//         )} */}
//         <BackButton />
//         { this.state.petitions.map(petition =>
//           <div key={petition.id} to={`/petitions/${petition.id}`}>
//             <Link to={`/petitions/${petition.id}`}>  <img src={petition.image} className="img-responsive" /> </Link>
//             <h2> { petition.title } </h2>
//             <p> { petition.abstract }</p>
//             <h2> number of signatures: { petition.number_of_signatures } </h2>
//             <Link to={`/petitions/${petition.id}`}>Read more</Link>
//           </div>
//         )}
//       </div>
//     );
//
//   }
//
// }
//
//
// export default PetitionsIndex;
