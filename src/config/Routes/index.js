import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, DetailCity } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/kota">
                    <DetailCity />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
