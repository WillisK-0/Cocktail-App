import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import "../style/Menu.css";

function Menu(props) {
  const [search, setSearch] = useState("");

  const handleTypeSelection = (type) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${type}
    `)
      .then((r) => r.json())
      .then((result) => props.handleTypeAction(result.drinks));
  };

  const handleSearchPress = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((r) => r.json())
      .then((result) => props.handleSearchAction(result.drinks));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h4 className="navbar-brand">U-MIX</h4>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home<span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Drink-Type
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink
                className="dropdown-item"
                to="/drink-type/shot"
                onClick={() => handleTypeSelection("Shot")}
              >
                Shot
              </NavLink>
              <NavLink
                className="dropdown-item"
                to="/drink-type/cocktail"
                onClick={() => handleTypeSelection("Cocktail")}
              >
                Cocktail
              </NavLink>
              <NavLink
                className="dropdown-item"
                to="/drink-type/beer"
                onClick={() => handleTypeSelection("Beer")}
              >
                Beer
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={handleSearchPress}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

{
  /* <input value={input} onInput={e => setInput(e.target.value)}/> */
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleTypeAction: (drinks) => {
      dispatch({ type: "TYPE_LIST", drinkTypeList: drinks });
    },
    handleSearchAction: (drinks) => {
      dispatch({ type: "SEARCH_LIST", drinkSearchList: drinks });
    },
  };
};
export default connect(null, mapDispatchToProps)(Menu);
