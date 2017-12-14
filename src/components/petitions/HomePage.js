import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

const HomePage = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }


  return(
    <div>
      { !Auth.isAuthenticated() && <h1>PetTinder</h1> }
      { !Auth.isAuthenticated() && <h2>Tinder for Petitions</h2> }
      <nav>
        <button className="Menu-bottom">
          { !Auth.isAuthenticated() &&
          <Link to="/login" className="standard-button">Login</Link> }
          {/* </button> */}
          {' '}
          {/* <button className="Register"> */}
          { !Auth.isAuthenticated() &&
          <Link to="/register" className="standard-button">Register</Link> }
        </button>
        {' '}
        { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick = {logout} >logout </a> }
      </nav>
    </div>
  );

};


export default withRouter(HomePage);
