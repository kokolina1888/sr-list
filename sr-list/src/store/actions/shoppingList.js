import * as actionTypes from "./actionTypes";
import axios from "axios";
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
export const addRecipeToShoppingList = (data, userId) => {
  const recipeData = {
    userId: userId,
    recipe: data,
  };
  return (dispatch) => {
    axios
      .post(
        "https://sr-list-ccafe.firebaseio.com/shoppinglists.json",
        recipeData
      )
      .then((response) => {
        dispatch(getUserShoppingList(userId));
      })
      .catch((error) => {});
  };
};
// export const fetchCategoriesSuccess = (categories) => {
//   return {
//     type: actionTypes.FETCH_CATEGORIES_SUCCESS,
//     categories: categories,
//   };
// };

// export const fetchCategoriesError = () => {
//   return {
//     type: actionTypes.FETCH_CATEGORIES_FAIL,
//     error: "categories fetch error",
//   };
// };
// export const fetchCategoriesStart = () => {
//   return {
//     type: actionTypes.FETCH_CATEGORIES_START,
//   };
// };

export const getUserShoppingList = (userId) => {
  return (dispatch) => {
    const searchBy = userId;
    const queryParams = '?orderBy="userId"&equalTo="' + searchBy + '"';
    axios
      .get(
        "https://sr-list-ccafe.firebaseio.com/shoppinglists.json" + queryParams
      )
      .then((res) => {
        //set shoppingList in state
        dispatch(fetchShoppingListSuccess(res.data));
      })
      .catch((err) => {
        //set error in state
      });
  };
};

export const fetchShoppingListSuccess = (shoppingList) => {
  return {
    type: actionTypes.FETCH_SHOPPING_LIST_SUCCESS,
    shoppingList: shoppingList,
  };
};
