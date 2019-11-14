import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {

  return (
        
    <div className="greeting-pitch">
    
      <div className="greeting-brand-product">
        <span className="greeting-brand">Google</span>
        <span className="greeting-product-name">Keep</span>
      </div>

      <div className="greeting-tagline-btn-container">

        <div className="greeting-tagline">
          <h2>Save your thoughts,<br></br>wherever you are</h2>
        </div>

        <div className="greeting-button-container">
          <Link className="greeting-link" to="/signup">Sign Up</Link>
          <Link className="greeting-link" to="/login">Log In</Link>
          <button className="greeting-btn" onClick={props.login}>Demo</button>
        </div>

      </div>
      
    </div>      
    );
    
}

export default Greeting;