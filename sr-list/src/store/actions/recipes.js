import * as actionTypes from "./actionTypes";
import { firebaseRecipes } from "../../firebase";
import { firebaseLooper } from "../../shared";

// sets the recipes list
export const fetchRecipesSuccess = (recipes) => {
  return {
    type: actionTypes.FETCH_RECIPES_SUCCESS,
    recipes: recipes,
  };
};

export const fetchRecipesError = (error) => {
  return {
    type: actionTypes.FETCH_RECIPES_FAIL,
    error: error,
  };
};

export const fetchRecipesStart = () => {
  return {
    type: actionTypes.FETCH_RECIPES_START,
  };
};

export const countTotalRecipies = (total) => {
  return {
    type: actionTypes.COUNT_TOTAL_RECIPES,
    total_recipes: total,
  };
};

export const setRecipesPerPage = (num) => {
  return {
    type: actionTypes.SET_RECIPES_PER_PAGE,
    recipes_per_page: num,
  };
};



//TO DO ADD REVERSE ARRAY
export const fetchLatestRecipes = (num) => {
  return (dispatch) => {
    dispatch(fetchRecipesStart());
    firebaseRecipes
      .orderByKey()
      .limitToLast(+num)
      .once("value")
      .then((snapshot) => {
        const fetchedRecipes = firebaseLooper(snapshot);
        dispatch(fetchRecipesSuccess(fetchedRecipes));
      })
      .catch((err) => {
        dispatch(fetchRecipesError(err));
      });
  };
};
//TO DO ADD CURRENT PAGE, RECIPES PER PAGE FOR START AND END
//FIX PAGINATION - next results

export const fetchRecipesList = (num, prevKey ) => {
  console.log(typeof(prevKey));
  return (dispatch) => {
    const stack = +num    
    dispatch(fetchRecipesStart());
    firebaseRecipes
      .orderByKey()
      // .startAt(prevKey)
      .limitToFirst(stack)
      .once("value")
      .then((snapshot) => {
        const fetchedRecipes = firebaseLooper(snapshot);
        dispatch(fetchRecipesSuccess(fetchedRecipes));
        dispatch(setRecipesPerPage(num));
      })
      .catch((err) => {
        dispatch(fetchRecipesError(err));
      });
  };
};
