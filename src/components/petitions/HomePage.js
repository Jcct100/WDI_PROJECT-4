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
      <div>Logo</div>
      <nav>
        { !Auth.isAuthenticated() && <Link to="/login" className="standard-button">Login</Link> }
        {' '}
        { !Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link> }
        {' '}
        { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick = {logout} >logout </a> }
      </nav>
    </div>
  );

};


export default withRouter(HomePage);
