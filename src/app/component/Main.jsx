import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './dashboard';
import { Router, Route} from 'react-router-dom';
import { history } from '../store/history'
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskDetails } from './TaskDetails';

export const Main = () => (
    <Router history = {history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                <Route 
                exact path ="/dashboard" 
                render = {() => (<ConnectedDashboard/>)} 
                />
                <Route
                exact path = "/task/:id"
                render = {({match}) => (<ConnectedTaskDetails match={match}/>)}
                />
            </div>
        </Provider>
    </Router>
)