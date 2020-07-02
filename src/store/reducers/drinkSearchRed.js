const initialState = { drinkSearchList: [] };

const drinkSearch = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_LIST":
      return {
        ...state,
        drinkSearchList: action.drinkSearchList,
      };
  }
  return state;
};

export default drinkSearch;
