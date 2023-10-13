const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

    case "REMOVE_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

    case "FILTER":
      let copy3 = state.allCharacters;
      let copyFilter = copy3.filter((char) => char.gender === payload);
      return {
        ...state,
        myFavorites: copyFilter,
      };

    case "ORDER":
      let copy4 = state.allCharacters;
      let copySort = copy4.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: copySort,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
