import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './store/sagas/rootSaga';
import dashboardReducer from "./store/reducers/dashboard";
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const rootReducer = combineReducers({
    dashboard: dashboardReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(rootSaga);


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
