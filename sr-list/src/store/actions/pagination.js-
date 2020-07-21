import * as actionTypes from "./actionTypes";
import { firebaseRecipes } from "../../firebase";
import { firebaseLooper } from "../../shared";

export const countTotalRecipies = (total) => {
  return {
    type: actionTypes.COUNT_TOTAL_RECIPES,
    total_recipes: total,
  };
};

export const countRecipesError = (error) => {
  return {
    type: actionTypes.COUNT_RECIPES_FAIL,
    error: error,
  };
};

export const setLastRecipeKey = (key) => {
  return {
    type: actionTypes.SET_LAST_RECIPE_KEY,
    key: key,
  };
};

export const setInitPaginationKey = (num) => {
  console.log(num)
  const stack = +num + 1;
  return (dispatch) => {
    firebaseRecipes
      .orderByKey()
      .limitToFirst(stack)
      .once("value")
      .then((snapshot) => {
        const fetchedRecipes = firebaseLooper(snapshot);       
        const newKey = fetchedRecipes[2].id;
        dispatch(setLastRecipeKey(newKey));
      })
      .catch((err) => {
        //handle errors
      });
  };
};

export const loadNextPage = (num, prevKey) => {
  console.log(prevKey);
  const stack = +num + 1;
  return (dispatch) => {
    firebaseRecipes
      .orderByKey()
      .startAt(prevKey)
      .limitToFirst(stack)
      .once("value")
      .then((snapshot) => {
        const fetchedRecipes = firebaseLooper(snapshot);
        const newKey = fetchedRecipes[2].id;
        dispatch(setLastRecipeKey(newKey));
      })
      .catch((err) => {
        //handle errors
      });
  };
};

export const countTotalRecipes = () => {
  return (dispatch) => {
    firebaseRecipes
      .once("value")
      .then((snapshot) => {
        const total = snapshot.numChildren();
        dispatch(countTotalRecipies(total));
      })
      .catch((err) => {
        dispatch(countRecipesError(err));
      });
  };
};
