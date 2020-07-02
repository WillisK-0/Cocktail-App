import React from "react";
import "../style/alcoholSelector.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Selector(props) {
  function handleImagePress(alc) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alc}
    `)
      .then((r) => r.json())
      .then((result) => props.handleCategorySelection(result.drinks));
  }
  return (
    <div className="selector-wrapper">
      <hr className="solid"></hr>

      <ul className="selector-ul">
        <li className="selector-items">
          <NavLink
            to="/category/vodka"
            onClick={() => handleImagePress("Vodka")}
          >
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Vodka.png"
              alt="alcohol-bottle"
              className="selector-bottle-img"
            ></img>
          </NavLink>
        </li>
        <li className="selector-items">
          <NavLink to="/category/rum" onClick={() => handleImagePress("Rum")}>
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Rum.png"
              alt="alcohol-bottle"
              className="selector-bottle-img"
            ></img>
          </NavLink>
        </li>
        <li className="selector-items">
          <NavLink
            to="/category/tequila"
            onClick={() => handleImagePress("Tequila")}
          >
            <img
              src="https://www.thecocktaildb.com/images/ingredients/Tequila.png"
              alt="alcohol-bottle"
              className="selector-bottle-img"
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
export default connect(null, mapDispatchToProps)(Selector);
