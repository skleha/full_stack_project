import React from "react";
import GreetingContainer from './GreetingContainer';
import { Route } from 'react-router-dom';
import { AuthRoute } from "../utils/route_util";
import FormSignupContainer from './FormSignupContainer';
import FormLoginContainer from './FormLoginContainer';
import Main from './Main';



const App = () => (
  <div>
    <AuthRoute path="/login" component={FormLoginContainer} />
    <AuthRoute path="/signup" component={FormSignupContainer} />
    <Route exact path="/notes" component={Main} />
    <Route exact path="/" component={GreetingContainer} />
  </div>
);

export default App;
