import * as actionTypes from "../actions/actionTypes";

const initialState = {
 categories: null,
 error: false,
 loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories, loading: false };
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
export default reducer;
