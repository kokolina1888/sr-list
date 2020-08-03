import * as actionTypes from "./actionTypes";
import { firebaseUnits } from "../../firebase";
import { firebaseLooper } from "../../shared";

// recipes list
export const fetchUnitsSuccess = (units) => {
 
  return {
    type: actionTypes.FETCH_UNITS_SUCCESS,
    units: units,
  };
};

export const fetchUnitsError = () => {
  return {
    type: actionTypes.FETCH_UNITS_FAIL,
    error: "Units fetch error",
  };
};
export const fetchUnitsStart = () => {
  return {
    type: actionTypes.FETCH_UNITS_START,
  };
};

export const fetchUnits = (num) => {
  return (dispatch) => {
    dispatch(fetchUnitsStart());
    firebaseUnits
      .orderByChild('name')
      .once("value")
      .then((snapshot) => {
        const fetchedUnits = firebaseLooper(snapshot);
        
        dispatch(fetchUnitsSuccess(fetchedUnits));
      })
      .catch((err) => {
        dispatch(fetchUnitsError());
      });
  };
};

