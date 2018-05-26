import React from 'react';
import Wizard from './component/Wizard/Wizard';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';


export default (
    
    <Switch>
        <Route
            exact path='/'
            component={ Header }
            />
        <Route
            path='/dashboard'
            component= { Dashboard }
             />
        <Route
            path='/wizard'
            component={ Wizard }
             />
    </Switch>
    
)