import React, { useEffect, useState } from "react";
import "../style/displayRandom.css";

function DisplayRandom(props) {
  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const getDrinkAttribute = (drink, att) => {
    const drinkKeys = Object.keys(drink);
    const filteredDrink = drinkKeys.filter(
      (key) => drink[key] != null && key.includes(att)
    );

    let drinkAttributes = [];
    for (let i = 0; i < filteredDrink.length; i++) {
      drinkAttributes.push(drink[filteredDrink[i]]);
    }

    return drinkAttributes;
  };

  const setDrinkAttributes = (drink) => {
    setIngredients(getDrinkAttribute(drink, "strIngredient"));
    setMeasurements(getDrinkAttribute(drink, "strMeasure"));
  };

  useEffect(() => {
    setDrinkAttributes(props.drink[0]);
  }, []);

  let drinkItem = null;

  drinkItem = (
    <div className="random-drink-wrapper">
      <h1 id="tryRecipeH1">Try This Recipe!</h1>
      <hr className="solid"></hr>

      <ul className="random-drink-divs">
        <li className="random-drink-item">
          <div>
            <h1>{props.drink[0].strDrink}</h1>
          </div>

          <div className="random-drink-card">
            <img
              src={props.drink[0].strDrinkThumb}
              className="random-drink-img"
              alt="drink image"
            ></img>
          </div>
        </li>
        <li className="random-drink-item">
          {" "}
          <div className="random-drink-content">
            <h1>Ingredients:</h1>
            <h3></h3>
            <ul className="random-drink-items">
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    {measurements[index]} {ingredient}
                  </li>
                );
              })}
            </ul>
            <h4 id="instructionsH4">Instructions:</h4>
            <p id="instructionsP">
              Use a {props.drink[0].strGlass} then{" "}
              {props.drink[0].strInstructions}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );

  return <>{props.drink != null ? drinkItem : null}</>;
}

export default DisplayRandom;
