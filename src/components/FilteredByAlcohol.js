import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SmAlcSelector from "./SmAlcSelector";

import "../style/filteredByAlcohol.css";

import { connect } from "react-redux";

function FilteredByAlcohol(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shuffled = props.drinkArray.sort(() => 0.5 - Math.random());

  return (
    <div className="drink-list-wrapper">
      <div className="sm-filter-drink-selector">
        <div className="filtered-drink-list-title"></div>
        <hr className="solid"></hr>

        <SmAlcSelector />
      </div>

      <hr className="solid"></hr>
      <div className="drink-items-wrapper">
        <ul className="drink-list-items">
          {shuffled.slice(0, 50).map((drink, index) => {
            const drinkDetails = "/category/vodka/" + drink.idDrink;
            return (
              <li key={index} className="drink-list-item">
                <div className="drink-card">
                  <NavLink to={drinkDetails} style={{ textDecoration: "none" }}>
                    <img src={drink.strDrinkThumb} alt="drink"></img>
                    <figcaption>{drink.strDrink}</figcaption>
                    <input
                      type="hidden"
                      name="drinkId"
                      value={drink.idDrink}
                    ></input>
                  </NavLink>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    drinkArray: state.alcoholCategoryReducer.drinkList,
  };
};

// export default connect(mapStateToProps)(FilteredByAlcohol);
export default connect(mapStateToProps)(FilteredByAlcohol);
