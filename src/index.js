import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FilteredByAlcohol from "./components/FilteredByAlcohol";
import { createStore } from "redux";
import reducer from "./reducers/AlcoholCategory";
import { Provider } from "react-redux";
import Search from "./components/Search";
import DrinkDetails from "./components/DrinkDetails";

const combineReducers = redux.combineReducers;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route
              component={FilteredByAlcohol}
              path="/category/:alc_type"
              exact
            ></Route>
            <Route component={Search} path="/search" exact></Route>
            <Route
              component={DrinkDetails}
              path="/category/vodka/:id"
              exact
            ></Route>
          </Switch>
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
