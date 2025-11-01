import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
