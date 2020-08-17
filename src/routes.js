/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ServiceOrder from './pages/service-order/ServiceOrder';
import Material from './pages/material/Material';
import PrivateRoute from './components/routes/PrivateRoute';
import Schedule from './pages/schedule/Schedule';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/order/:id" component={ServiceOrder} />
        <PrivateRoute path="/solicitar" component={Material} />
        <PrivateRoute path="/schedule" component={Schedule} />
      </Switch>
    </Router>
  );
}
