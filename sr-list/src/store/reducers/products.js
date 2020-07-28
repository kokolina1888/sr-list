import * as actionTypes from "../actions/actionTypes";

const initialState = {
 products: null,
 error: false,
 loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.products, loading: false };
    case actionTypes.FETCH_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
export default reducer;
