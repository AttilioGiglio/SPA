import React from 'react';
import Navbar from '../components/ui/navbar';
import { Switch, Route, Redirect } from "react-router-dom";
import Marvel from '../components/marvel/marvel';
import Heroe from '../components/heroes/heroe';
import Dc from '../components/dc/dc';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path='/marvel' component={Marvel} />
                    <Route exact path='/hero/:heroeId' component={Heroe} />
                    <Route exact path='/dc' component={Dc} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>

    )
}

export default DashboardRoutes
