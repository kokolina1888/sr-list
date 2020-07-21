import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: false,
  loading: false,
  redirectPath: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_AUTH_START:
      return { ...state, loading: true };
    case actionTypes.USER_AUTH_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.USER_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        userId: action.userId,
        authRedirectPath: "/",
      };
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        redirectPath: action.path
      };

    default:
      return state;
  }
};
export default reducer;
