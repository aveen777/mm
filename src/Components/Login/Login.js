import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`wrapper ${isActive ? 'flip' : ''}`}>
      <div className={`form_wrapper sign_in`}>
        <form action="#">
          <h2>Sign In</h2>
          <div className="input_group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input_group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember">
            <label><input type="checkbox" /> Remember me</label>
          </div>
          <button type="submit">Sign In</button>
          <div className="sign_up_link">
            <p>Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a></p>
          </div>
          <div className="social_platform">
            <p>Or sign in with</p>
            <div className="social_icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
        </form>
      </div>

      <div className={`form_wrapper sign_up`}>
        <form action="#">
          <h2>Sign Up</h2>
          <div className="input_group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input_group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input_group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember">
            <label><input type="checkbox" /> I agree to the terms and conditions</label>
          </div>
          <button type="submit">Sign Up</button>
          <div className="sign_up_link">
            <p>Already have an account? <a href="#" onClick={toggleForm}>Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
