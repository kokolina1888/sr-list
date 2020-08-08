import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipesCount: 0,
  success: false,
  error: false,
  recipes: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNT_FAVORITE_RECIPES:
      return { ...state, recipesCount: action.recipesCount };
    case actionTypes.FETCH_FAVORITES_START:
      return { ...state, success: false, error: false };
    case actionTypes.FETCH_FAVORITES_SUCCESS:
      return { ...state, recipes: action.recipes };
    case actionTypes.RESET_FL_MESSAGES:
      return { ...state, success: false, error: false };
    case actionTypes.ADD_TO_FAVORITES_SUCCESS:
      return { ...state, success: "Recipe added to Favorites!" };
    case actionTypes.ADD_TO_FAVORITES_FAIL:
      return { ...state, error: action.error };
    case actionTypes.REMOVE_FROM_FAVORITES_START:
      return { ...state, error: false, success: false };
    case actionTypes.REMOVE_FROM_FAVORITES_SUCCESS:
      return { ...state, success: "Recipe removed from Favorites!" };
    case actionTypes.REMOVE_FROM_FAVORITES_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
export default reducer;