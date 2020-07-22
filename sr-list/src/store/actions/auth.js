import * as actionTypes from "./actionTypes";
import { firebase } from '../../firebase'

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
    idToken: token,
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
var res = firebase
  .auth()
  .createUserWithEmailAndPassword(data.email, data.password)
  console.log(res)
  // .then((response) => {
  //   const expirationDate = new Date(
  //     new Date().getTime() + +response.data.expiresIn
  //   );
  //   console.log(response.user.uid)
  //   localStorage.setItem("token", response.data.idToken);
  //   localStorage.setItem("expirationDate", expirationDate);
  //   localStorage.setItem("userId", response.data.localId);
  //   dispatch(authSuccess(response.data.idToken, response.data.localId));
  //   // dispatch(checkAuthTimeout(response.data.expiresIn));
  // })
  // .catch(function (error) {
  //   // var errorCode = error.code;
  //   // var errorMessage = error.message;
  //   dispatch(authFail(error.message));
  // });
   
  //   var user = firebase.auth().currentUser;

  //   if (user) {
  //     console.log(user.uid)
  //   } else {
  //     // No user is signed in.
  //   }

  };
};