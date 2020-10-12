import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from '../components/login/login';
import Marvel from '../components/marvel/marvel';

const AppRouter = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Marvel} />
            </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
