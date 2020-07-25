import * as actionTypes from "./actionTypes";
import { firebaseProducts } from "../../firebase";
import { firebaseLooper } from "../../shared";

// recipes list
export const fetchProductsSuccess = (products) => {
 
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const fetchProductsError = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: 'products fetch error',
  };
};
export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  };
};

export const fetchProducts = (num) => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    firebaseProducts
      .orderByChild('name')
      .once("value")
      .then((snapshot) => {
        const fetchedProducts = firebaseLooper(snapshot);
        
        dispatch(fetchProductsSuccess(fetchedProducts));
      })
      .catch((err) => {
        dispatch(fetchProductsError(err));
      });
  };
};

