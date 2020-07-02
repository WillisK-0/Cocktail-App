import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SmAlcSelector from "./SmAlcSelector";

import "../style/filteredByAlcohol.css";

import { connect } from "react-redux";

function FilteredByAlcohol(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    let title =
      props.match.params.alc_type.charAt(0).toUpperCase() +
      props.match.params.alc_type.slice(1);

    // setLocalDrinkList(props.drinkArray);
  }, [props.drinkArray]);

  const shuffled = props.drinkArray.sort(() => 0.5 - Math.random());
  let title =
    props.match.params.alc_type.charAt(0).toUpperCase() +
    props.match.params.alc_type.slice(1);
  return (
    <div className="drink-list-wrapper">
      <div className="sm-filter-drink-selector">
        <div className="filtered-drink-list-title">
          <ul className="filtered-drink-list-title-items">
            <li className="filtered-drink-list-title-item">
              <img src="https://img.icons8.com/color/96/000000/coconut-cocktail.png" />
            </li>
            <li className="filtered-drink-list-title-item">
              <h1>{title}</h1>
            </li>
            <li className="filtered-drink-list-title-item">
              <img src="https://img.icons8.com/fluent/96/000000/champagne-bottle.png" />
            </li>
          </ul>
        </div>
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
                    <img src={drink.strDrinkThumb}></img>
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
