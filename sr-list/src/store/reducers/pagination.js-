import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: false,
  total_recipes: 0,
  key: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNT_RECIPES_FAIL:
      return { ...state, error: action.error };
    case actionTypes.COUNT_TOTAL_RECIPES:
      return { ...state, total_recipes: action.total_recipes };
    case actionTypes.SET_LAST_RECIPE_KEY:
      return { ...state, key: action.key };

    default:
      return state;
  }
};

export default reducer;
