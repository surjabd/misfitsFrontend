import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import allReducers from "./reducers/allReducers";
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter} from "react-router-dom"
const history = createHistory();
export const store  = createStore(allReducers,applyMiddleware(thunk,logger));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
        <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
