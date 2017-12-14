import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class WelcomePage extends React.Component {

  render() {
    return(
      <div>
        <h1>Hi, Welcome</h1>
        <h2>Are you ready to change the world?</h2>
        <p>YES..Please choose actions:</p>
        { Auth.isAuthenticated() && <Link to="/petitions/new" >
          Create: {''} <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
        </Link> }
        {''}
        <Link to="/petitions">
          Search: {''} <i className="fa fa-search-plus fa-2x" aria-hidden="true"></i>
        </Link>
        {''}
        <p> Not yet? ...Learn more:
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
      </div>
    );
  }

}


export default WelcomePage;
