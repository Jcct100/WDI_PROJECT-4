import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class WelcomePage extends React.Component {

  render() {
    return(
      <div>
        <h1>PetTinder</h1>
        <h2>Tinder for Petitions</h2>
        <p>Tutorial:
          {/* <iframe
            width="560"
            height="315"
            src="#"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen>
          </iframe> */}
        </p>
        <button className="main-button">
          { Auth.isAuthenticated() && <Link to="/petitions/new">
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
