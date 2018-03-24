import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from './../components/Header';
import NotFoundPage from './../components/404';
import HomePage from './../components/HomePage';
import PortfolioItem from './../components/PortfolioItem';
import Portfolio from './../components/Portfolio';
import Contact from './../components/Contact';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItem} exact={true}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;