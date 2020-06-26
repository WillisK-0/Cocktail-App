import React, { useEffect, useState } from "react";

function DisplayRandom(props) {
  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const getDrinkAttribute = (drink, att) => {
    const drinkKeys = Object.keys(drink);
    const filteredDrink = drinkKeys.filter(
      (key) => drink[key] != null && key.includes(att)
    );

    let drinkIngredients = [];
    for (let i = 0; i < filteredDrink.length; i++) {
      //   drinkIngredients[filteredDrink[i]] = drink[filteredDrink[i]];
      drinkIngredients.push(drink[filteredDrink[i]]);
    }
    console.log(drinkIngredients);

    return drinkIngredients;
  };

  const setDrinkAttributes = (drink) => {
    setIngredients(getDrinkAttribute(drink, "strIngredient"));
    setMeasurements(getDrinkAttribute(drink, "strMeasure"));
  };

  useEffect(() => {
    console.log(props);

    setDrinkAttributes(props.drink[0]);
  }, []);

  let drinkItem = null;

  drinkItem = (
    <div>
      <h1>{props.drink[0].strDrink}</h1>
      <ul>
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index}>
              {ingredient} - {measurements[index]}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return <>{props.drink != null ? drinkItem : null}</>;
}

export default DisplayRandom;
