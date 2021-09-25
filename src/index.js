import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

// Redux set up.
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/index';

// Store
const store = createStore(reducer, applyMiddleware(thunk, logger))


const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

// Added Proder
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

//Task List:
// x 1. Add in all necessary components and libary methods.
// x 2. Create a store that includes thunk and logger middleware support.
// x 3. Wrap the App component in a react-redux Provider element.