import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


//when using switch below, like a switch statement to goes through one by one until its a match,
// therefore the NotFoundPage needs to be last because it will always find that (because theres no path specified)
const AppRouter = ()  => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path = "/" component = {HomePage} exact = {true}/>
            <Route path = "/portfolio" component = {Portfolio} exact = {true}/>
            {/*<Route path = "/portfolio/:id" component = {PortfolioItemPage} />  */}                       
            <Route path = "/contact" component = {ContactPage} />
            <Route component = {NotFoundPage} />
        </Switch>
    </div>        
</BrowserRouter>
);


export default AppRouter;