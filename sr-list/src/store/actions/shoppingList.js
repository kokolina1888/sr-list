import * as actionTypes from "./actionTypes";
import axios from "axios";
import { firebaseDB, firebaseShoppingLists } from "../../firebase";

export const fetchShoppingListStart = () => {
  return {
    type: actionTypes.FETCH_SHOPPING_LIST_START,
  };
};
export const resetSLMessages = () => {
  return (dispatch) => {
    dispatch(resetMessages());
  };
};

export const resetMessages = () => {
  return {
    type: actionTypes.RESET_SL_MESSAGES,
  };
};
export const addRecipeToShoppingList = (data, userId) => {
  const recipeData = {
    userId: userId,
    recipe: data,
  };
  return (dispatch) => {
    dispatch(fetchShoppingListStart());
    axios
      .post(
        "https://sr-list-ccafe.firebaseio.com/shoppinglists.json",
        recipeData
      )
      .then((response) => {
        dispatch(addToShoppingListSuccess());
        dispatch(getUserShoppingList(userId));
      })
      .then((res) => {
        dispatch(countUserShoppingListRecipes(userId));
      })
      .catch((error) => {
        dispatch(addToShoppingListFail(error));
      });
  };
};

export const getUserShoppingList = (userId) => {
  return (dispatch) => {
    dispatch(fetchShoppingListStart());
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

export const addToShoppingListSuccess = () => {
  return {
    type: actionTypes.ADD_TO_SHOPPING_LIST_SUCCESS,
  };
};
export const addToShoppingListFail = (error) => {
  return {
    type: actionTypes.ADD_TO_SHOPPING_LIST_FAIL,
    eror: error,
  };
};
export const removeFromShoppingListFail = (error) => {
  return {
    type: actionTypes.REMOVE_FROM_SHOPPING_LIST_FAIL,
    eror: error,
  };
};
export const removeFromShoppingListSuccess = () => {
  return {
    type: actionTypes.REMOVE_FROM_SHOPPING_LIST_SUCCESS,
  };
};

export const countUserShoppingListRecipes = (userId) => {
  return (dispatch) => {
    dispatch(fetchShoppingListStart());
    const searchBy = userId;
    const queryParams = '?orderBy="userId"&equalTo="' + searchBy + '"';
    axios
      .get(
        "https://sr-list-ccafe.firebaseio.com/shoppinglists.json" + queryParams
      )
      .then((res) => {
        let uniqueRecipes = [];

        for (let ind in res.data) {
          if (uniqueRecipes.indexOf(res.data[ind].recipe.id) < 0) {
            uniqueRecipes.push(res.data[ind].recipe.id);
          }
        }
        dispatch(setShoppingListRecipesCount(uniqueRecipes.length));
      })
      .catch((err) => {
        //set error in state
      });
  };
};
//counts unique recipes in shopping list
export const setShoppingListRecipesCount = (recipesCount) => {
  return {
    type: actionTypes.COUNT_SHOPPING_LIST_RECIPES,
    recipesCount: recipesCount,
  };
};
export const removeRecipeFromShoppingList = (recipeId, userId) => {
  return (dispatch) => {
    dispatch(fetchShoppingListStart());
   firebaseShoppingLists
     .orderByChild("userId")
     .equalTo(userId)
     .once("value")
     .then(function (snapshot) {
       snapshot.forEach(function (childSnapshot) {
         if (childSnapshot.val().recipe.id === recipeId) {
           firebaseShoppingLists.child(childSnapshot.key).remove();
         }
       });
     })
     .then((response) => {
       dispatch(removeFromShoppingListSuccess());
       dispatch(getUserShoppingList(userId));
     })
     .then((res) => {
       dispatch(countUserShoppingListRecipes(userId));
     })
     .catch((err) => {
       dispatch(removeFromShoppingListFail(err));
     });


  };
};
