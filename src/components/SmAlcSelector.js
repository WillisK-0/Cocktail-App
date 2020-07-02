import React from "react";
import "../style/smAlcSelector.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function SmAlcSelector(props) {
  function handleImagePress(alc) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alc}
    `)
      .then((r) => r.json())
      .then((result) => props.handleCategorySelection(result.drinks));
  }
  return (
    <div className="sm-selector-wrapper">
      <ul className="sm-selector-ul">
        <li className="sm-selector-items">
          <NavLink
            to="/category/vodka"
            onClick={() => handleImagePress("Vodka")}
          >
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Vodka.png"
              alt="alcohol-bottle"
              className="sm-selector-bottle-img"
            ></img>
          </NavLink>
        </li>
        <li className="sm-selector-items">
          <NavLink to="/category/vodka" onClick={() => handleImagePress("Rum")}>
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Rum.png"
              alt="alcohol-bottle"
              className="sm-selector-bottle-img"
            ></img>
          </NavLink>
        </li>
        <li className="sm-selector-items">
          <NavLink
            to="/category/vodka"
            onClick={() => handleImagePress("Tequila")}
          >
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Tequila.png"
              alt="alcohol-bottle"
              className="sm-selector-bottle-img"
            ></img>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCategorySelection: (drinks) =>
      dispatch({ type: "DRINK_LIST", drinkArray: drinks }),
  };
};
export default connect(null, mapDispatchToProps)(SmAlcSelector);
