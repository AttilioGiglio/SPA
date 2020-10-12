import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from '../components/login/login';
import DashboardRoutes from './dashboard_routes';

const AppRouter = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route path='/' component={DashboardRoutes} />
            </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
