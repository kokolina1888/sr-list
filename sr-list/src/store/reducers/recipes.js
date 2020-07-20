import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  error: false,
  loading: false,
  recipes_per_page: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_RECIPES_SUCCESS:
      return { ...state, recipes: action.recipes, loading: false };
    case actionTypes.FETCH_RECIPES_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.SET_RECIPES_PER_PAGE:
      return { ...state, recipes_per_page: action.recipes_per_page };    
      
    default:
      return state;
  }
};

export default reducer;
