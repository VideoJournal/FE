import React from "react";
import Layout from "./components/~common/Layout";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/LandingPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Layout>
  );
}

export default App;
