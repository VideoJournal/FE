import React from "react";
import Layout from "./components/~common/Layout";
import { Switch, Route } from "react-router-dom";
// import Banner from "./components/Banner/Banner";
import Landing from "./components/Landing/LandingPage";

function App() {
  return (
    <Layout>
      {/* <h1>Video Journal</h1> */}
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Layout>
  );
}

export default App;
