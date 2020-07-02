import React, { useState } from "react";
import { connect } from "react-redux";

import { NavLink, Redirect } from "react-router-dom";

import "../style/Menu.css";

function Menu(props) {
  const [search, setSearch] = useState("");
  const [searchLink, setSearchLink] = useState("");
  const [enterPress, setEnterPress] = useState(false);

  const handleTypeSelection = (type) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${type}
    `)
      .then((r) => r.json())
      .then((result) => props.handleTypeAction(result.drinks));
  };

  const handleSearchPress = (input) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
      .then((r) => r.json())
      .then((result) => props.handleSearchAction(result.drinks))
      .then(() => {
        setSearchLink("/search/" + search);
      });
  };

  const handleKeyPress = (e, search) => {
    if (e.which === 13) {
      console.log("fire");
      handleSearchPress(search);
      setSearchLink("/search/" + search);
      setEnterPress(true);
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          className="navbar-brand"
          src="https://img.icons8.com/officel/40/000000/cocktail.png"
          alt="drink"
        />
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
              <a className="nav-link" href="#">
                {" "}
              </a>
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
            {/* <NavLink to={searchLink}> */}
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, search)}
            ></input>
            <>
              {enterPress == true && searchLink.length > 0 ? (
                <Redirect to={searchLink} />
              ) : null}
            </>
            <NavLink to={searchLink}>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={() => handleSearchPress(search)}
              >
                Search
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
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
