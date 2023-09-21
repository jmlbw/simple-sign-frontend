import React from 'react';
import '../styles/pages/Login.css';

export default function Login() {
  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="login_title">SimpleSign</div>
          <div className="eula">
            전자결재
            <br />
            5조
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">...</svg>
          <div className="form">
            <label htmlFor="login_id">ID</label>
            <input type="login_id" id="login_id" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <input type="submit" id="submit" value="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}
