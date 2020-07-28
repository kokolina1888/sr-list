import * as actionTypes from "../actions/actionTypes";

const initialState = {
 units: null,
 error: false,
 loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_UNITS_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_UNITS_SUCCESS:
      return { ...state, units: action.units, loading: false };
    case actionTypes.FETCH_UNITS_FAIL:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};
export default reducer;
