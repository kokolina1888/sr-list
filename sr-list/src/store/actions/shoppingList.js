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
        // console.log(res)
        let shoppingList = {};        
        for(let ind in res.data){
          let currRecipe = res.data[ind].recipe
          let ing = currRecipe.ingredients;
          console.log(currRecipe)
          if (shoppingList.recipes) {
            if (!shoppingList.recipes[currRecipe.id]) {
              shoppingList.recipes[currRecipe.id] = {};
              shoppingList.recipes[currRecipe.id].name = currRecipe.name;
            }
          } else {
            shoppingList.recipes = {};
            shoppingList.recipes[currRecipe.id] = {};
            shoppingList.recipes[currRecipe.id].name = currRecipe.name;
          } 
          if( shoppingList.products ){
            for (let ind in ing) {
              let curUnit = ing[ind].units;
              console.log(ing[ind]);
            }
          } else {
            shoppingList.products = {}
            for( let ind in ing ){
              let curUnit = ing[ind].units; //check if init in obj already, check if prod in obj already
              shoppingList.products.curUnit = {}
              shoppingList.products.curUnit[productName] = {};
              shoppingList.products.curUnit[productName].quantity = ing[ind].quantity
              console.log(ing[ind])
            }
          }       
        } 
        console.log(shoppingList);
      })
      .catch((err) => {});
  };
};
