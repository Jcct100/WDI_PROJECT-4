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
      .get('/api/petitions')
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
        header: { Authorization: `Bearer ${Auth.getToken()}` }
      })
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
      <Cards onEnd={ this.end } className='master-root'>
        {this.state.petitions.map(petition =>
          <Card key={petition.id}
            onSwipeRight={() => this.right(petition)}
            onSwipeLeft={() => this.left}>
            <Link to={`/profile/${petition.id}`}> <p> {petition.createdBy.username}</p> </Link>
            <h2>{ petition.title}</h2>
            <p> { petition.abstract }</p>
            {/* <Link to={`/petitions/${petition.id}`}>   */}
            <img src={petition.image} className="img-responsive" />
            {/* </Link> */}
            <h2> number of signatures: { petition.signees.length } </h2>
            <Link to={`/petitions/${petition.id}`}>Read more</Link>
            <BackButton />
          </Card>
        )}
      </Cards>
    );
  }
}

export default PetitionsIndex;
