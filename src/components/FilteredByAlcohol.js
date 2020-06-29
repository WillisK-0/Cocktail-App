import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../style/filteredByAlcohol.css";

import { connect } from "react-redux";

function FilteredByAlcohol(props) {
  const [localDrinkList, setLocalDrinkList] = useState([]);

  useEffect(() => {
    setLocalDrinkList(props.drinkArray);
  }, [props.drinkArray]);

  return (
    <div className="drink-list-wrapper">
      <ul className="drink-list-items">
        {localDrinkList.slice(0, 15).map((drink, index) => {
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

const mapStateToProps = (state) => {
  return {
    drinkArray: state.drinkList,
  };
};

// export default connect(mapStateToProps)(FilteredByAlcohol);
export default connect(mapStateToProps)(FilteredByAlcohol);
