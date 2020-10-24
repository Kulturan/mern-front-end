import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, DetailCity } from '../../pages';
import Navbar from '../../pages/component/Navbar';
import Footer from '../../pages/component/Footer';

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/kota">
                    <DetailCity />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes;
