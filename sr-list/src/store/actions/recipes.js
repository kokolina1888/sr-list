import * as actionTypes from "./actionTypes";
import { firebaseRecipes } from "../../firebase";
import { firebaseLooper } from '../../shared'

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

export const fetchRecipesStart = (orders) => {
  return {
    type: actionTypes.FETCH_RECIPES_START,
  };
};

export const fetchRecipes = (num) => {  
  
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



