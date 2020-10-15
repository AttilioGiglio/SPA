import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from '../auth/auth_context';
import PrivateRoute from './private_route';
import PublicRoute from './public_route';
import Login from '../components/login/login';
import DashboardRoutes from './dashboard_routes';

const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            <div>
            <Switch>
                <PublicRoute 
                exact 
                path='/login' 
                component={Login} 
                isAuthenticated={user.logged}    
                />
                <PrivateRoute 
                path='/' 
                component={DashboardRoutes} 
                isAuthenticated={user.logged} 
                />
            </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
