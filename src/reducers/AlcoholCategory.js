const initialState = { drinkList: [] };

const alcoholCategory = (state = initialState, action) => {
  switch (action.type) {
    case "DRINK_LIST":
      return {
        ...state,
        drinkList: state.drinkList.concat(action.drinkArray),
      };
  }
  return state;
};

export default alcoholCategory;
