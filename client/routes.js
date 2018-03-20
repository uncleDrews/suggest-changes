import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import InitialForm from './containers/InitialForm'

export default (
        <div className="container">
            <Switch>

                <Route exact path={'/'} component={InitialForm} />
                <Route path={'/fb'} component={() => <div>Wololo</div>} />

            </Switch>
        </div>
);