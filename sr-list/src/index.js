import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./routing";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import recipesReducer from './store/reducers/recipes'
import authReducer from './store/reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ 
  recipes: recipesReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
