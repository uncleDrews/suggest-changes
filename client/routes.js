import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import InitialForm from './containers/InitialForm'
import ArticlePage from "./containers/ArticlePage";
import AllSuggestionsPage from "./containers/AllSuggestionsPage";

export default (
        <div className="container">
            <Switch>
                <Route path='/fb' component={ArticlePage}/>
                <Route path='/result' component={AllSuggestionsPage} />
                <Route component={ArticlePage}/>
            </Switch>
        </div>
);