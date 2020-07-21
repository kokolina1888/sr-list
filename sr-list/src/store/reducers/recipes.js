import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  error: false,
  loading: false,
  lastKey: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_RECIPES_SUCCESS:
      return { ...state, recipes: action.recipes, loading: false };
    case actionTypes.FETCH_RECIPES_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.SET_KEY:
      return { ...state, lastKey: action.lastKey };
    case actionTypes.SET_KEY_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default reducer;
