import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthRoute from "./components/common/auth-route/AuthRoute";
import LoginPage from "./pages/login-page/LoginPage";
import DashboardPage from "./pages/dashboard-page/DashboardPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <AuthRoute path="/dashboard" component={DashboardPage} />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
