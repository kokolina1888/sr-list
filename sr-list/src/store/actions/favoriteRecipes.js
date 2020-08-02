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
        console.log('test')
        console.log(recipes.length)
        dispatch(setFavoriteRecipesCount(recipes.length));
      })
      .catch((err) => {
        console.log(err)
      });
  };
  console.log('favs counted')
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
        console.log("added to favorites - see favs count in nav bar!");
      })
      .then((res) => {
        dispatch(countUserFavoriteRecipes(userId));
      })
      .catch((error) => {
        console.log(error);
      });
    }         
        
  };
  
