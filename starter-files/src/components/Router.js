import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App'
import Recipe from './Recipe'
import Error from './Error'
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
);

export default Router;