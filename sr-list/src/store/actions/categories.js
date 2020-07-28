import * as actionTypes from "./actionTypes";
import { firebaseCategories } from "../../firebase";
import { firebaseLooper } from "../../shared";

// recipes list
export const fetchCategoriesSuccess = (categories) => {
 
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories: categories,
  };
};

export const fetchCategoriesError = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: 'categories fetch error',
  };
};
export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_START,
  };
};

export const fetchCategories = (num) => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart());
    firebaseCategories
      .orderByChild('name')
      .once("value")
      .then((snapshot) => {
        const fetchedCategories = firebaseLooper(snapshot);
        
        dispatch(fetchCategoriesSuccess(fetchedCategories));
      })
      .catch((err) => {
        dispatch(fetchCategoriesError(err));
      });
  };
};

