import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store/configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('./styles/main.css');

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.querySelector('.container')
);