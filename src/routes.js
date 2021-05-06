import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import MaxDoctor from './pages/MaxDoctor';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Main}/>
                <Route path="/maxdoctor" exact component= {MaxDoctor}/>
            </Switch>
        </BrowserRouter>
    )
}