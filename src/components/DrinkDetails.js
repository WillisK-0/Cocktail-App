import React, { useEffect, useState } from "react";

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

    console.log(filteredDrink);
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
    <div className="details-wrapper">
      <h1>{details.strDrink}</h1>
      <img src={details.strDrinkThumb}></img>
      <h2>Ingredients</h2>
      <ul className="details-items">
        <li className="details-item">Glass: {details.strGlass}</li>

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
      <h4>Instructions</h4>
      <p>{details.strInstructions}</p>
    </div>
  );
}

export default DrinkDetails;
