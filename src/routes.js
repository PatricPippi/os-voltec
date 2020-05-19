import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import { ThemeProvider } from "@material-ui/core";
import NavTop from "./components/nav-top/NavTop";
import NavTab from "./components/nav-bottom/NavTab";
import Dashboard from "./pages/dashboard/Dashboard";
import ServiceOrder from "./pages/service-order/ServiceOrder";
import Material from "./pages/material/Material";

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
                
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/order" >
                    <ServiceOrder />
                </Route>
                <Route path="/solicitar" >
                    <Material />
                </Route>
                
        </Switch>
    </Router>
  );
}