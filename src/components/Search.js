import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../style/search.css";

function Search(props) {
  let searchInput =
    props.match.params.input.charAt(0).toUpperCase() +
    props.match.params.input.slice(1);

  return (
    <div className="drink-list-wrapper">
      <div className="drink-type-title">
        <h1>{searchInput}</h1>
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
