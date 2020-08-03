import * as actionTypes from "./actionTypes";
import axios from "axios";

export const countUserFavoriteRecipes = (userId) => {
  return (dispatch) => {
    const searchBy = userId;
    const queryParams = '?orderBy="userId"&equalTo="' + searchBy + '"';
    axios
      .get("https://sr-list-ccafe.firebaseio.com/favorites.json" + queryParams)
      .then((res) => {
        let recipes = [];
        for (let ind in res.data) {
          recipes.push(res.data[ind].recipeId);
        }
        dispatch(setFavoriteRecipesCount(recipes.length));
      })
      .catch((err) => {
        //dispatch error handling method
      });
  };
};
//counts unique recipes in shopping list
export const setFavoriteRecipesCount = (recipesCount) => {
  return {
    type: actionTypes.COUNT_FAVORITE_RECIPES,
    recipesCount: recipesCount,
  };
};

export const addToFavorites = (data, userId) => {
  return (dispatch) => {
    //check if recipe is alreay in firebase
    axios
      .post("https://sr-list-ccafe.firebaseio.com/favorites.json", data)
      .then((response) => {
        //dispatch success handling method
      })
      .then((res) => {
        dispatch(countUserFavoriteRecipes(userId));
      })
      .catch((error) => {
        //dispatch error handling method
      });
  };
};
