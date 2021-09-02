import React from "react";
import About from "../components/pages/About";
import Home from "../components/pages/Home";
import { Route, Switch } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
import View from "../components/pages/View";
import Edit from "../components/pages/Edit";
import AddUser from "../components/pages/AddUser";

function HomePageRoutes() {
  return (
    <>
      <Switch>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path="/about" component={About}></Route>
        <Route exact={true} path="/user/view/:id" component={View}></Route>
        <Route exact={true} path="/user/edit/:id" component={Edit}></Route>
        <Route exact={true} path="/user/add" component={AddUser}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default HomePageRoutes;
