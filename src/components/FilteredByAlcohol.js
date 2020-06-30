import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../style/filteredByAlcohol.css";

import { connect } from "react-redux";

function FilteredByAlcohol(props) {
  const [localDrinkList, setLocalDrinkList] = useState([]);

  useEffect(() => {
    console.log(props);
    setLocalDrinkList(props.drinkArray);
  }, [props.drinkArray]);

  const shuffled = localDrinkList.sort(() => 0.5 - Math.random());

  return (
    <div className="drink-list-wrapper">
      <ul className="drink-list-items">
        {shuffled.slice(0, 50).map((drink, index) => {
          const drinkDetails = "/category/vodka/" + drink.idDrink;
          return (
            <li key={index} className="drink-list-item">
              <div className="drink-card">
                <NavLink to={drinkDetails}>
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
  );
}

const mapStateToProps = (state) => {
  return {
    drinkArray: state.alcoholCategoryReducer.drinkList,
  };
};

// export default connect(mapStateToProps)(FilteredByAlcohol);
export default connect(mapStateToProps)(FilteredByAlcohol);
