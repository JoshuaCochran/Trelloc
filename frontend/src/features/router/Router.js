import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Board from "../boards/Board";
import BoardList from "../boards/BoardList"
import LoginFormWrapper from "../user/LoginFormWrapper"

const Router = () => {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/user/boards/:id"
          render={props => <Board id={props.match.params.id} />}
        />
        <Route exact path="/user/boards" render={() => <BoardList />} />
        <Route exact path="/user/login" render={() => <LoginFormWrapper/>}/>
        <Route exact path="/" render={() => <Redirect to="/user/boards" />} />
      </Switch>
    </main>
  );
};

export default Router;
