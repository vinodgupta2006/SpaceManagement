import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CheckUserLogin from '../checkUserLogin/checkUserLogin';
import Login from '../../pages/login';
import Dashboard from '../../pages/dashboard';
import NotFound from '../../pages/notFound/notFound';

const route = () =>{
    const route = 
    <Router>
        <Switch>
            <Route
                path={`/`}
                exact={true}
                component={CheckUserLogin(Login)}
            />
            <Route
                path={`/dashboard`}
                exact={true}
                component={CheckUserLogin(Dashboard)}
            />
            <Route
                path={ '/not-found' }
                exact={true}
                component={CheckUserLogin(NotFound)}
            />
            <Route
                path=''
                exact={false}
                render={() => {
                    return (
                    <Redirect to={ '/not-found' } />
                    );
                }}
            />
        </Switch>
    </Router>

    return route;
}

export default route;