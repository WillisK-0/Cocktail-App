import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../style/displayType.css";

function DisplayType(props) {
  //   const [drinks, setDrinks] = useState([]);
  //   useEffect(() => {
  //     setDrinks(props.drinkTypeList);
  //   }, [props.drinkTypeList]);

  const shuffled = props.drinkTypeList.sort(() => 0.5 - Math.random());

  // // Get sub-array of first n elements after shuffled
  // let selected = shuffled.slice(0, n);

  console.log(props.drinkTypeList);
  return (
    <div className="drink-list-wrapper">
      <ul className="drink-list-items">
        {shuffled.slice(0, 50).map((drink, index) => {
          const drinkDetails =
            `/drink-type/${props.match.params.type}/` + drink.idDrink;
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
  );
}

const mapStateToProps = (state) => {
  return {
    drinkTypeList: state.drinkTypeReducer.drinkTypeList,
  };
};
export default connect(mapStateToProps)(DisplayType);
