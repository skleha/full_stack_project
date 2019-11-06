import React from "react";
import GreetingContainer from './GreetingContainer';
import { Route } from 'react-router-dom';
import { AuthRoute } from "../utils/route_util";
import FormSignupContainer from './FormSignupContainer';
import FormLoginContainer from './FormLoginContainer';
// import NoteIndexContainer from './NoteIndexContainer';
import NoteFormCreateContainer from "./NoteFormCreateContainer";



const App = () => (
  <div>
    <AuthRoute path="/login" component={FormLoginContainer} />
    <AuthRoute path="/signup" component={FormSignupContainer} />
    <Route exact path="/notes" component={NoteFormCreateContainer} />
    <Route exact path="/" component={GreetingContainer} />
  </div>
);

export default App;
