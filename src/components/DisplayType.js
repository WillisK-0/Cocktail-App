import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../style/displayType.css";

function DisplayType(props) {
  //   const [drinks, setDrinks] = useState([]);
  //   useEffect(() => {
  //     setDrinks(props.drinkTypeList);
  //   }, [props.drinkTypeList]);

  const shuffled = props.drinkTypeList.sort(() => 0.5 - Math.random());
  let title =
    props.match.params.type.charAt(0).toUpperCase() +
    props.match.params.type.slice(1);
  // // Get sub-array of first n elements after shuffled
  // let selected = shuffled.slice(0, n);

  return (
    <div className="drink-list-wrapper">
      <div className="drink-type-title">
        <h1>{title}</h1>
      </div>
      <NavLink to="" onClick={() => props.history.goBack}>
        <img
          src="https://img.icons8.com/android/24/000000/circled-left-2.png"
          className="back-button"
        />
      </NavLink>
      <hr className="solid"></hr>
      <div className="drink-type-list-wrapper">
        <ul className="drink-type-list-items">
          {shuffled.slice(0, 50).map((drink, index) => {
            const drinkDetails =
              `/drink-type/${props.match.params.type}/` + drink.idDrink;
            return (
              <li key={index} className="drink-type-list-item">
                <div className="drink-card">
                  <NavLink to={drinkDetails} style={{ textDecoration: "none" }}>
                    <img src={drink.strDrinkThumb} alt="drink"></img>
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    drinkTypeList: state.drinkTypeReducer.drinkTypeList,
  };
};
export default connect(mapStateToProps)(DisplayType);
