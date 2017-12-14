import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import BackButton from '../utility/BackButton';
import Cards, { Card } from 'react-swipe-card';
import Auth from '../../lib/Auth';

class PetitionsIndex extends React.Component {
  state = {
    petitions: []
  }

  componentDidMount() {
    Axios
      .get('/api/petitions', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      //we only add the headers where because in the back end we check
      //if there is a secure route before we run the index function
      // which secure route checks if the user is authenticated 
      })
      .then(res => this.setState({ petitions: res.data }))
      .catch(err => console.log(err));

    // Axios
    //   .get('/api/users')
    //   .then(res => this.setState({ users: res.data }))
    //   .catch(err => console.log(err));
  }

  right(petition) {
    Axios
      .post(`/api/petitions/${petition.id}/sign`, petition, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
        //this means send the petition as a message to the post request.
        //you are passing the petition as body.
        //the headers it is to get the Token from the user. ensure they are
        //autheticated.
        //this happens when you send a HTTP request.
      })
      .then(() => console.log('right'))
      .catch(err => console.log(err));
  }

  left() {
    console.log('left');
  }

  end() {
    console.log('end');
    alert('there are no more petitions');
  }

  render() {
    console.log(this.state.petitions);
    return (
      <div>
        <h2 className='Petitionindex_title'>No likey no swipey</h2>
        <Cards onEnd={ this.end } className='master-root'>
          {this.state.petitions.map(petition =>
            <Card key={petition.id}
              onSwipeRight={() => this.right(petition)}
              onSwipeLeft={() => this.left}>
              <p><Link to={`/profile/${petition.createdBy.id}`}>{petition.createdBy.username}</Link>{'\'s'} petition</p>
              <h2>{ petition.title}</h2>
              <p> { petition.abstract }</p>
              {/* <Link to={`/petitions/${petition.id}`}>   */}
              <div className="card-image" style={{backgroundImage: 'url(' + `${petition.image}` + ')'}}></div>
              {/* <img src={petition.image} className="img-responsive" /> */}
              {/* </Link> */}
              <h2> Number of signatures: { petition.signees.length } </h2>
              <p><Link to={`/petitions/${petition.id}`}>Read more</Link></p>
              <BackButton />
            </Card>
          )}
        </Cards>
        <h2 >Swipe <strong>right</strong> to sign & left to skip</h2>
        {/* <i className="fa fa-arrow-circle-o-right">Sign</i> */}
      </div>
    );
  }
}

export default PetitionsIndex;
