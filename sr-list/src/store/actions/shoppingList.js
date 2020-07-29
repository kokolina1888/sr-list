import * as actionTypes from "./actionTypes";
import axios from "axios";

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
      .then(res => {
        dispatch(countUserShoppingListRecipes(userId));
      })
      .catch((error) => {});
  };
};

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

export const countUserShoppingListRecipes = (userId) => {
  return (dispatch) => {
    const searchBy = userId;
    const queryParams = '?orderBy="userId"&equalTo="' + searchBy + '"';
    axios
      .get(
        "https://sr-list-ccafe.firebaseio.com/shoppinglists.json" + queryParams
      )
      .then((res) => {
        let uniqueRecipes = []

        for(let ind in res.data){
          console.log(uniqueRecipes.indexOf(res.data[ind].recipe.id));
          if (uniqueRecipes.indexOf( res.data[ind].recipe.id ) < 0) {
            uniqueRecipes.push(res.data[ind].recipe.id);
          }
        }
        
        dispatch(setShoppingListRecipesCount(uniqueRecipes.length));
      })
      .catch((err) => {
        //set error in state
      });
  };
}
//counts unique recipes in shopping list
export const setShoppingListRecipesCount = (recipesCount) => {
  return {
    type: actionTypes.COUNT_SHOPPING_LIST_RECIPES,
    recipesCount: recipesCount,
  };
};
