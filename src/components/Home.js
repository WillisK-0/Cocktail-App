import React, { useEffect, useState } from "react";
import "../style/Home.css";
import * as utils from "../utils/fetchFunctions";
import DisplayRandom from "./DisplayRandom";

function Home() {
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((r) => r.json())
      .then((result) => setRandomDrink(result.drinks));
  }, []);

  console.log(randomDrink);
  return (
    <div className="home_page_div">
      <h1>HomePage</h1>
      <div>
        <h1>Random Drink</h1>

        {randomDrink.length > 0 ? <DisplayRandom drink={randomDrink} /> : null}
      </div>
    </div>
  );
}
export default Home;
