import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function DisplayType(props) {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    setDrinks(props.drinkTypeList);
  }, [props.drinkTypeList]);

  return (
    <div className="drink-list-wrapper">
      <ul className="drink-list-items">
        {drinks.slice(0, 15).map((drink, index) => {
          const drinkDetails = "/category/vodka/" + drink.idDrink;
          return (
            <li key={index} className="drink-list-item">
              <div className="drink-card">
                <NavLink to={drinkDetails}>
                  <label>{drink.strDrink}</label>
                  <img src={drink.strDrinkThumb}></img>
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

const matchStateToProps = (state) => {
  return {
    drinkTypeList: state.drinkTypeReducer.drinkTypeList,
  };
};
export default connect(matchStateToProps)(DisplayType);
