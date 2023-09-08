const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      let copy1 = state.allCharacters;
      copy1.push(payload);
      return {
        ...state,
        myFavorites: copy1,
        allCharacters: copy1,
      };

    case "REMOVE_FAV":
      let copy2 = state.myFavorites.filter(
        (char) => char.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: copy2,
      };

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
