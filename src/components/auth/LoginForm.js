import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

const LoginForm = ({ handleChange, handleSubmit, user  }) => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
      { !Auth.isAuthenticated() && <Link to="/register">Don't yet have an account?</Link> }
    </div>
  );
};

export default LoginForm;
