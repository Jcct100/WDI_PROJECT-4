import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

const RegisterForm = ({ handleChange, handleSubmit, user  }) => {
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={user.username}
            className="form-control"
          />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={user.passwordConfirmation}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="telephone_number"
            placeholder="Telephone Number"
            onChange={handleChange}
            value={user.telephone_number}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            value={user.address}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Register</button>
      </form>
      { !Auth.isAuthenticated() && <Link to="/login">Already have an account?</Link> }
    </div>
  );
};

export default RegisterForm;
