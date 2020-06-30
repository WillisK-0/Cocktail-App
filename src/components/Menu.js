import React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import "../style/Menu.css";

function Menu(props) {
  function handleTypeSelection(type) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${type}
    `)
      .then((r) => r.json())
      .then((result) => props.handleTypeAction(result.drinks));
  }

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
            <NavLink className="nav-link" to="#">
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
                to="#"
                onClick={handleTypeSelection("Shot")}
              >
                Shot
              </NavLink>
              <a className="dropdown-item" href="#">
                Cocktail
              </a>
              <a className="dropdown-item" href="#">
                Beer
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleTypeAction: (drinks) => {
      dispatch({ type: "TYPE_LIST", drinkTypeList: drinks });
    },
  };
};
export default connect(null, mapDispatchToProps)(Menu);
