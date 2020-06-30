const initialState = { drinkTypeList: [] };

const drinkType = (state = initialState, action) => {
  switch (action.type) {
    case "TYPE_LIST":
      return {
        ...state,
        drinkTypeList: action.drinkTypeList,
      };
    case "SEARCH_LIST":
      return {
        ...state,
        drinkSearchList: action.drinkSearchList,
      };
  }
  return state;
};

export default drinkType;
