const initialState = { drinkTypeList: [] };

const drinkType = (state = initialState, action) => {
  switch (action.type) {
    case "TYPE_LIST":
      return {
        ...state,
        drinkTypeList: state.drinkTypeList.concat(action.drinkTypeList),
      };
  }
};

export default drinkType;
