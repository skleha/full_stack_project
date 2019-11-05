import React from "react";
import GreetingContainer from './GreetingContainer';
import { Route } from 'react-router-dom';
import { AuthRoute } from "../utils/route_util";
import FormSignupContainer from './FormSignupContainer';
import FormLoginContainer from './FormLoginContainer';


const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={FormLoginContainer} />
    <AuthRoute path="/signup" component={FormSignupContainer} />
  </div>
);

export default App;
