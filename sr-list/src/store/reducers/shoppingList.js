import * as actionTypes from "../actions/actionTypes";

const initialState = {
  shoppingList: null,
  recipesCount: 0,
  error: null,
  success: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_SHOPPING_LIST_START:
      return { ...state, success:false };
    case actionTypes.ADD_TO_SHOPPING_LIST_SUCCESS:
      return { ...state, success: "Recipe added to Shopping List!" };
    case actionTypes.ADD_TO_SHOPPING_LIST_FAIL:
      return { ...state, error: action.error };
    case actionTypes.FETCH_SHOPPING_LIST_START:
      return { ...state, success: false };
    case actionTypes.FETCH_SHOPPING_LIST_SUCCESS:
      return { ...state, shoppingList: action.shoppingList, success: 'Recipe added to Shopping List!' };
    case actionTypes.COUNT_SHOPPING_LIST_RECIPES:
      return { ...state, recipesCount: action.recipesCount };
    default:
      return state;
  }
};
export default reducer;

