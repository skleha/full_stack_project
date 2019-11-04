import React from "react";
import GreetingContainer from './GreetingContainer';
import { Route } from 'react-router-dom';
import FormSignupContainer from './FormSignupContainer';
import FormLoginContainer from './FormLoginContainer';


const App = () => (
  <div>

    <header>
      <h1>Keeper</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={FormLoginContainer} />
    <Route path="/signup" component={FormSignupContainer} />
  
  </div>
);

export default App;
