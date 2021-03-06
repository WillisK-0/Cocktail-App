import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../style/drinkDetails.css";

function DrinkDetails(props) {
  const [details, setDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);

  function goFetch() {
    const drinkId = props.match.params.id;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
      .then((r) => r.json())
      .then((result) => {
        setDetails(result.drinks[0]);
        setMeasurements(getAtt(result.drinks[0], "strMeasure"));
        setIngredients(getAtt(result.drinks[0], "strIngredient"));
      });
  }

  function getAtt(details, att) {
    const keys = Object.keys(details);

    const filteredDrink = keys.filter(
      (key) => details[key] != null && key.includes(att)
    );

    let drinkAttributes = [];
    for (let i = 0; i < filteredDrink.length; i++) {
      drinkAttributes.push(details[filteredDrink[i]]);
    }
    return drinkAttributes;
  }

  useEffect(() => {
    goFetch();
  }, []);

  return (
    <div className="random-drink-wrapper">
      <NavLink to="" onClick={() => props.history.goBack}>
        <img
          src="https://img.icons8.com/android/24/000000/circled-left-2.png"
          className="back-button"
        />
      </NavLink>
      <ul className="random-drink-divs">
        <li className="random-drink-item">
          <div>
            <h1>{details.strDrink}</h1>
          </div>

          <div className="drink-type-drink-card">
            <img
              src={details.strDrinkThumb}
              className="random-drink-img"
              alt="drink"
            ></img>
          </div>
        </li>
        <li className="random-drink-item">
          {" "}
          <div className="random-drink-content">
            <h1>Ingredients:</h1>
            <ul className="drink-type-drink-items">
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    <p>
                      {measurements[index]} {ingredient}
                    </p>
                  </li>
                );
              })}
            </ul>
            <h4 id="instructionsH4">Instructions:</h4>
            <p id="instructionsP">
              Use a {details.strGlass} then {details.strInstructions}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DrinkDetails;
