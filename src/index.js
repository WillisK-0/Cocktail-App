import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FilteredByAlcohol from "./components/FilteredByAlcohol";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Search from "./components/Search";
import DrinkDetails from "./components/DrinkDetails";
import drinkTypeReducer from "./store/reducers/drinkTypeRed";
import alcoholCategoryReducer from "./store/reducers/AlcoholCategory";
import drinkSearch from "./store/reducers/drinkSearchRed";

import DisplayType from "./components/DisplayType";

const rootReducer = combineReducers({
  drinkTypeReducer,
  alcoholCategoryReducer,
  drinkSearch,
});

const store = createStore(
  rootReducer,
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
            <Route
              component={DisplayType}
              path="/drink-type/:type"
              exact
            ></Route>
            <Route
              component={DrinkDetails}
              path="/drink-type/:type/:id"
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
