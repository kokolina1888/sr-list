import * as actionTypes from "../actions/actionTypes";

const initialState = {
  shoppingList: null,
  recipesCount: 0,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_SHOPPING_LIST_START:
      return { ...state, loading: true };
    case actionTypes.ADD_TO_SHOPPING_LIST_SUCCESS:
      return { ...state, loading: false };
    case actionTypes.ADD_TO_SHOPPING_LIST_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.FETCH_SHOPPING_LIST_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_SHOPPING_LIST_SUCCESS:
      return { ...state, loading: false, shoppingList: action.shoppingList };
    case actionTypes.ADD_TO_SHOPPING_LIST_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.COUNT_SHOPPING_LIST_RECIPES:
      return { ...state, recipesCount: action.recipesCount };
    default:
      return state;
  }
};
export default reducer;

