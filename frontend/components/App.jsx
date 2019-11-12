import React from "react";
import GreetingContainer from './GreetingContainer';
import { AuthRoute } from "../utils/route_util";
import { ProtectedRoute } from "../utils/route_util";
import FormSignupContainer from './FormSignupContainer';
import FormLoginContainer from './FormLoginContainer';
import ModalContainer from './ModalContainer';
import MainContainer from './MainContainer';

const App = () => (
  <div>
    <ModalContainer />
    <AuthRoute path="/login" component={FormLoginContainer} />
    <AuthRoute path="/signup" component={FormSignupContainer} />
    <ProtectedRoute path="/notes" component={MainContainer} />
    <AuthRoute exact path="/" component={GreetingContainer} />
  </div>
);

export default App;
