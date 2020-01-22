import React from "react";
import Layout from "./components/~common/Layout";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/LandingPage";
import Dash from "./components/Dashboard/Dash";
import Login from "./components/Authentication/Login";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dash" component={Dash} />
        <Route path="/login" component={Login} />
      </Switch>
    </Layout>
  );
}

export default App;
