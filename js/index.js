require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import EmailListContainer from './components/email-container';
import App from './components/app';

const routes = (
    <Router history={hashHistory}>
        <Route path="/emails" component={App}>
            <IndexRoute component={EmailListContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
ReactDOM.render(routes, document.getElementById('app'))
);