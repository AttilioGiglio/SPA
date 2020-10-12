import React from 'react';
import Navbar from '../components/ui/navbar';
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import Marvel from '../components/marvel/marvel';
import Heroe from '../components/dc/heroe';

const DashboardRoutes = () => {
    return (
        <>
        <Navbar />
        <div>
        <Switch>
            <Route exact path='/marvel' component={Marvel} />
            <Route exact path='/heroe/:heroeId' component={Heroe} />
            <Route exact path='/dc' component={Heroe} />
            <Redirect to='/marvel' />
            </Switch>
            </div>
        </>
        
    )
}

export default DashboardRoutes
