import * as actionTypes from "./actionTypes";
import { firebaseShoppingList, firebaseShoppingLists } from "../../firebase";
import { firebaseLooper } from "../../shared";

// case actionTypes.ADD_TO_SHOPPING_LIST_START:
//       return { ...state, loading: true };
//     case actionTypes.ADD_TO_SHOPPING_LIST_SUCCESS:
//       return { ...state, loading: false };
//     case actionTypes.ADD_TO_SHOPPING_LIST_FAIL:
//       return { ...state, loading: false, error: action.error };
//     case actionTypes.FETCH_SHOPPING_LIST_START:
//       return { ...state, loading: true };
//     case actionTypes.FETCH_SHOPPING_LIST_SUCCESS:
//       return { ...state, loading: false, shoppingList: action.shoppingList };
//     case actionTypes.ADD_TO_SHOPPING_LIST_FAIL:
//       return { ...state, loading: false, error: action.error };
//     default:
//       return state;
// recipes list
export const addRecipeToShoppingList = ( data ) => {

}
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
    firebaseShoppingLists
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

