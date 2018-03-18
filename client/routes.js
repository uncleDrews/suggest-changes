import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
// import App from "./components/App";

export default (
        <div className="main-content-wrapper">
            <Switch>

                <Route exact path={'/'} component={() => <div>HUI</div>} />
                <Route exact path={'/fb'} component={() => <div>PIZDA</div>} />

            </Switch>
        </div>
);