import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import "../style/search.css";

function Search(props) {
  // const [resultCheck, setResultCheck] = useState("");
  // useEffect(() => {
  //   if (props.drinkSearchList != null) {
  //     let drinkArray = props.drinkSearchList;
  //     return drinkArray;
  //   } else {
  //     <Redirect to="/404-search-error" />;
  //   }
  // });

  let searchInput =
    props.match.params.input.charAt(0).toUpperCase() +
    props.match.params.input.slice(1);

  return (
    <div className="drink-list-wrapper">
      <div className="drink-type-title">
        <h1>"{searchInput}"</h1>
      </div>
      <hr className="solid"></hr>

      <ul className="drink-list-items">
        {props.drinkSearchList.map((drink, index) => {
          const drinkDetails =
            `/drink-type/${props.match.params.type}/` + drink.idDrink;
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
  );
}

const mapStateToProps = (state) => {
  return {
    drinkSearchList: state.drinkTypeReducer.drinkSearchList,
  };
};
export default connect(mapStateToProps)(Search);
