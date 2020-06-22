import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../views/Home';
import Login from "../views/Login"
import User from "../views/User";

const ProjectRouter = () => {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={User}/>
      </Switch>
    </Router>
  )
}

export default ProjectRouter;
