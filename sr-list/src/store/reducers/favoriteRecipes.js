import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipesCount: 0,
  success: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNT_FAVORITE_RECIPES:
      return { ...state, recipesCount: action.recipesCount };
    case actionTypes.FETCH_FAVORITES_START:
      return { ...state, success: false, error: false };
    case actionTypes.ADD_TO_FAVORITES_SUCCESS:
      return { ...state, success: "Recipe added to Favorites!" };
    case actionTypes.ADD_TO_FAVORITES_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
export default reducer;
