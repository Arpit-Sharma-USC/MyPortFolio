import React from "react";
import LandingPage from "./landingPage";
import About from "./about";
import Projects from "./projects";
import Resume from "./resume";
import Contacts from "./contacts";

import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
);
export default Main;
