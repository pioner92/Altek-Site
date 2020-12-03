import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Store from './Redux/Store/Store';
import { AppContainer } from './AppContainer';
import {Notifications} from "react-push-notification";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={Store}>
            <AppContainer/>
            <Notifications />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);

