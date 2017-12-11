import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class WelcomePage extends React.Component {

  render() {
    return(
      <div>
        <h1>E-petition</h1>
        <p>Tutorial:</p>
        <p>About us:</p>
        <button className="main-button">
          { Auth.isAuthenticated() && <Link to="/petitionsnew/new">
            <i className="fa fa-plus" aria-hidden="true">Create your own petition:</i>Create
          </Link> }
        </button>
        <button className="main-button">
          <Link to="/petitions">
            <i className="fa fa-plus" aria-hidden="true">Search for petitions now:</i>Search
          </Link>
        </button>
      </div>
    );
  }

}


export default WelcomePage;
