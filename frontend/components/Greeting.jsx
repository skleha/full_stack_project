import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
      <div className="greeting-main">
        
        <div className="greeting-pitch">
        
          <div className="greeting-brand-product">
            <span className="greeting-brand">Google</span>
            <span className="greeting-product-name">Keep</span>
          </div>

          <div className="greeting-tagline">
            <h2>Save your thoughts, <br></br>wherever you are</h2>
          </div>

          <div className="greeting-button-container">
            <Link className="greeting-btn" to="/signup">Sign Up</Link>
            <Link className="greeting-btn" to="/login">Log In</Link>
          </div>
          
        </div>      
      </div>
    );

  return (
    <div>
      {display}
    </div>
  )
}

export default Greeting;