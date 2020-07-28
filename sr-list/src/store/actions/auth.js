import * as actionTypes from "./actionTypes";
import axios from 'axios'

export const setUserAuthType = (type) => {
  return {
    type: actionTypes.SET_USER_AUTH_TYPE,
    isSignUp: type,
  };
};
export const authStart = () => {
  return {
    type: actionTypes.USER_AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.USER_AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.USER_AUTH_FAIL,
    error: error,
  };
};

export const auth = (data, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());    
    let dataAuth = {
      email: data.email,
      password: data.email,
      returnSecureToken: true
    }
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdyatDFn9wxITHtMHCAl17HjpV4jCstT4";
    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdyatDFn9wxITHtMHCAl17HjpV4jCstT4";
    }
    axios
      .post(url, dataAuth)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + (+response.data.expiresIn)
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(
          setAuthRedirectPath("/")
        );
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error.message));
      });
  };
};
export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authCheckState = () => {

  return (dispatch) => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (!token) {
      // dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate < new Date() || expirationDate === new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.USER_AUTH_LOGOUT,
  };
};