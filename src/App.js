import React from "react";
import Layout from "./components/~common/Layout";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/LandingPage";
import Dash from "./components/Dashboard/Dash";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Dash path="dash" component={Dash} />
      </Switch>
    </Layout>
  );
}

export default App;
