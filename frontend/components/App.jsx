import React from "react";
import GreetingContainer from './GreetingContainer';
import { Route } from 'react-router-dom';
import { AuthRoute } from "../utils/route_util";
import FormSignupContainer from './FormSignupContainer';
import FormLoginContainer from './FormLoginContainer';
import NoteIndexContainer from './NoteIndexContainer';


const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={FormLoginContainer} />
    <AuthRoute path="/signup" component={FormSignupContainer} />
    <Route exact path="/notes" component={NoteIndexContainer} />
  </div>
);

export default App;
