import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
      <div className="greeting-link-container">
        <Link className="greeting-btn" to="/signup">Sign Up</Link>
        <Link className="greeting-btn" to="/login">Log In</Link>
      </div>
    );

  return (
    <div>
      {display}
    </div>
  )
}

export default Greeting;