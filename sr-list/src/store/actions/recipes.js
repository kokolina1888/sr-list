import * as actionTypes from "./actionTypes";
import { firebaseRecipes } from "../../firebase";
import { firebaseLooper, reverseArray } from "../../shared";

// recipes list
export const fetchRecipesSuccess = (recipes) => {
  return {
    type: actionTypes.FETCH_RECIPES_SUCCESS,
    recipes: recipes,
  };
};

export const fetchRecipesError = () => {
  return {
    type: actionTypes.FETCH_RECIPES_FAIL,
    error: 'recipes fetch error',
  };
};
export const fetchRecipesStart = () => {
  return {
    type: actionTypes.FETCH_RECIPES_START,
  };
};
//last key
export const setLastKey = (lastKey) => {
  return {
    type: actionTypes.SET_KEY,
    lastKey: lastKey,
  };
};

export const setLastKeyError = () => {
  return {
    type: actionTypes.SET_KEY_ERROR,
    error: 'key fetch error'
  };
};

export const fetchNextKey = (num, lastKey) => {
  return (dispatch) => {
    const stack = +num + 1;
    firebaseRecipes
      .orderByKey()
      .startAt(lastKey)
      .limitToFirst(stack)
      .once("value")
      .then((snapshot) => {
        let fetchedRecipes = firebaseLooper(snapshot, num);
        const lastKey = fetchedRecipes[num].id;
        dispatch(setLastKey(lastKey));
      })
      .catch(() => {
        dispatch(setLastKeyError());
      });
  };
};

export const fetchInitKey = (num) => {
  return (dispatch) => {
    const stack = +num + 1;
    firebaseRecipes
      .orderByKey()
      .limitToFirst(stack)
      .once("value")
      .then((snapshot) => {
        let fetchedRecipes = firebaseLooper(snapshot, num);
        const lastKey = fetchedRecipes[num].id;
        dispatch(setLastKey(lastKey));
      })
      .catch(() => {
        dispatch(setLastKeyError());
      });
  };
};

export const fetchLatestRecipes = (num) => {
  return (dispatch) => {
    dispatch(fetchRecipesStart());
    firebaseRecipes
      .orderByKey()
      .limitToLast(+num)
      .once("value")
      .then((snapshot) => {
        const fetchedRecipes = firebaseLooper(snapshot);
        const revRecipes = reverseArray(fetchedRecipes);
        dispatch(fetchRecipesSuccess(revRecipes));
      })
      .catch((err) => {
        dispatch(fetchRecipesError(err));
      });
  };
};

export const fetchInitRecipesList = (num) => {
  return (dispatch) => {
    dispatch(fetchRecipesStart());
    firebaseRecipes
      .orderByKey()
      .limitToFirst(+num)
      .once("value")
      .then((snapshot) => {
        let fetchedRecipes = firebaseLooper(snapshot);
        dispatch(fetchRecipesSuccess(fetchedRecipes));
      })
      .catch((err) => {
        dispatch(fetchRecipesError());
      });
  };
};


export const fetchNextRecipesList = (num, lastKey) => {
  console.log(num, lastKey);
  return (dispatch) => {
    dispatch(fetchRecipesStart());
    firebaseRecipes
      .orderByKey()
      .startAt(lastKey)
      .limitToFirst(+num)
      .once("value")
      .then((snapshot) => {
        let fetchedRecipes = firebaseLooper(snapshot);
        dispatch(fetchRecipesSuccess(fetchedRecipes));
      })
      .catch((err) => {
        dispatch(fetchRecipesError(err));
      });
  };
};

