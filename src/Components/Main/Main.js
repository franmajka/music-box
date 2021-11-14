import React from "react";

import { Switch, Route } from "react-router";

import Home from "../Home/Home";
import Lessons from "../Lessons/Lessons";
import Schedule from "../Schedule/Schedule";
import Support from "../Support/Support";
import User from "../User/User";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/lessons' component={Lessons}></Route>
      <Route exact path='/support' component={Support}></Route>
      <Route path='/user' component={User}></Route>
      <Route path='/schedule' component={Schedule}></Route>
    </Switch>
  </main>
)

export default Main;
