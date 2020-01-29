import React from "react";
import Layout from "./components/~common/Layout";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/LandingPage";
import Dash from "./components/Dashboard/Dash";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import NotFound from "./components/~common/NotFound";
import VideoView from "./components/Dashboard/VideoView";


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dash" component={Dash} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <VideoView path="/video/:id" component={VideoView} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
