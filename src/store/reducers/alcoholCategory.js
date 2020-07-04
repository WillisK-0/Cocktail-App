const initialState = { drinkList: [] };

const alcoholCategory = (state = initialState, action) => {
  switch (action.type) {
    case "DRINK_LIST":
      return {
        ...state,
        drinkList: state.drinkList
          .splice(0, action.drinkArray.length)
          .concat(action.drinkArray),
      };
  }
  return state;
};

export default alcoholCategory;
