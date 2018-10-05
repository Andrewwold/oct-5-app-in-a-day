import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './style/main.scss';

import history from './history';

import Home from './components/pages/home';
import PageOne from './components/pages/pageOne';

function main() {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={ history }>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/pageOne" component={ PageOne } />
                </Switch>
            </Router>
        </Provider>
        , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);