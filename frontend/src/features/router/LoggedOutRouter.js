import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginFormWrapper from "../user/LoginFormWrapper"
import RegistrationFormWrapper from "../user/RegistrationFormWrapper"

const LoggedOutRouter = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/user/login" render={() => <LoginFormWrapper/>}/>
        <Route exact path="/user/register" render={() => <RegistrationFormWrapper/>}/>
        <Route path="/" render={() => <RegistrationFormWrapper/>}/>
      </Switch>
    </main>
  );
};

export default LoggedOutRouter;
