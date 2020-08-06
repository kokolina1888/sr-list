import * as actionTypes from "./actionTypes";
import axios from "axios";
import { firebaseDB } from "../../firebase";

export const removeFromFavorites = (favId, userId) => {
  return (dispatch) => {
    dispatch(removeFromFavoritesStart());

    let firebaseFav = firebaseDB.ref("favorites/" + favId);
    firebaseFav
      .remove()
      .then((res) => {
        dispatch(countUserFavoriteRecipes(userId));
        dispatch(fetchUserRecipes(userId))
        dispatch(removeFromFavoritesSuccess())
      })
      .catch((err) => {
        dispatch(removeFromFavoritesFail());
      });
  };
};
export const fetchUserRecipes = (userId) => {
  // const userId = this.props.userId;
  const queryParams = '?orderBy="userId"&equalTo="' + userId + '"';
  return (dispatch) => {
    dispatch(removeFromFavoritesStart());
  axios
    .get("https://sr-list-ccafe.firebaseio.com/favorites.json" + queryParams)
    .then((res) => {
      const fetchedRecipes = [];
      for (let key in res.data) {
        fetchedRecipes.push({ ...res.data[key], id: key });
      }
      
      dispatch(fetchFavoritesListSuccess(fetchedRecipes));
    })
    .catch((err) => {});
    
  }

}
export const fetchFavoritesListSuccess = (recipes) => {
return {
    type: actionTypes.FETCH_FAVORITES_SUCCESS,
    recipes: recipes
  };
}
export const removeFromFavoritesStart = () => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES_START,
  };
};
export const removeFromFavoritesSuccess = () => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES_SUCCESS,
  };
};

export const removeFromFavoritesFail = () => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES_FAIL,
    error: "REMOVE FROM FAVORITES FAILED!",
  };
};
export const addToFavorites = (data, userId) => {
  return (dispatch) => {
    dispatch(fetchFavoritesListStart());
    axios
      .post("https://sr-list-ccafe.firebaseio.com/favorites.json", data)
      .then((res) => {
        dispatch(countUserFavoriteRecipes(userId));
        dispatch(addToFavoritesSuccess());
      })
      .catch((error) => {
        //dispatch error handling method
      });
  };
};

export const countUserFavoriteRecipes = (userId) => {
  return (dispatch) => {
    dispatch(fetchFavoritesListStart());
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
//counts unique recipes in shopping list, and use it as a success flag
export const setFavoriteRecipesCount = (recipesCount) => {
  return {
    type: actionTypes.COUNT_FAVORITE_RECIPES,
    recipesCount: recipesCount,
  };
};

export const fetchFavoritesListStart = () => {
  return {
    type: actionTypes.FETCH_FAVORITES_START,
  };
};
export const addToFavoritesSuccess = () => {
  return {
    type: actionTypes.ADD_TO_FAVORITES_SUCCESS,
  };
};
export const setAddToFavoritesFailedMessage = (message) => {
  return (dispatch) => {
    dispatch(fetchFavoritesListStart());
    dispatch(addToFavoritesFail(message));
  };
};
export const addToFavoritesFail = (message) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES_FAIL,
    error: message,
  };
};
export const resetFLMessages = () => {
  return (dispatch) => {
    dispatch(resetMessages());
  };
};
export const resetMessages = () => {
  return {
    type: actionTypes.RESET_FL_MESSAGES,
  };
};

//TO DO - ADD TO FAVORITES FAIL - TO HANDLE ERRORS, SIMILAR AS SUCCESS, BUT SETS ERROR TO  TRUE, WRITES IN LIG FILE, ETC
