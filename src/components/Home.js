import React, { useEffect, useState } from "react";
import "../style/Home.css";
import DisplayRandom from "./DisplayRandom";
import Selector from "../components/AlcoholSelector";
function Home() {
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((r) => r.json())
      .then((result) => setRandomDrink(result.drinks));
  }, []);

  return (
    <div className="home_page_div">
      {randomDrink.length > 0 ? <DisplayRandom drink={randomDrink} /> : null}

      <Selector />
    </div>
  );
}
export default Home;
