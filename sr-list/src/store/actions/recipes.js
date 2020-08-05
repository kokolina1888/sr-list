import * as actionTypes from "./actionTypes";
import { firebaseRecipes } from "../../firebase";
import { firebaseLooper, reverseArray } from "../../shared";
import axios from "axios";

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
    error: "Fetch recipes error",
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
    error: "key fetch error",
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
      .catch(() => {});
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
        dispatch(fetchRecipesError());
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
        dispatch(fetchRecipesError());
      });
  };
};

export const fetchFilteredRecipesList = (filterName, filterValue) => {
  return (dispatch) => {
    dispatch(fetchRecipesStart());
    firebaseRecipes
      .orderByChild(filterName)
      .equalTo(filterValue)
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

export const fetchByNameRecipesList = (filterName, filterValue) => {
  return (dispatch) => {
    dispatch(fetchRecipesStart());
    firebaseRecipes
      .orderByChild(filterName)
      .startAt(filterValue)
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

export const fetchRecipesByCategory = () => {
  return (dispatch) => {
    dispatch(fetchRecipesByCategoryStart());
    let dataRecipes = [];
    axios
      .get("https://sr-list-ccafe.firebaseio.com/categories.json")
      .then((response) => {
        return response.data;
      })
      .then((res) => {
        console.log(res)
        for (let ind in res) {
          // console.log(res[ind]);
          let currCategory = res[ind];
          const queryParams = '?orderBy="categoryName"&equalTo="' + ind + '"';
          axios
            .get(
              "https://sr-list-ccafe.firebaseio.com/recipes.json" + queryParams
            )
            .then((recipes) => {
              // console.log(Object.keys(res.data).length);
              return recipes.data;
            })
            .then((res) => {
              dataRecipes.push({
                categoryName: currCategory.name,
                count: Object.keys(res).length,
              });
              console.log(dataRecipes)
             dispatch(fetchRecipesByCategorySuccess(dataRecipes));
            })
            .catch((err) => {});
          }       
      })
     
      .catch((err) => {});

    
  };
};

export const fetchRecipesByCategoryStart = () => {
  return {
    type: actionTypes.FETCH_RECIPES_BY_CATEGORY_START,
  };
};
export const fetchRecipesByCategorySuccess = (recipesData) => {
  return {
    type: actionTypes.FETCH_RECIPES_BY_CATEGORY_SUCCESS,
    recipesByCategory: recipesData,
  };
};
export const fetchRecipesByCategoryFail = () => {
  return {
    type: actionTypes.FETCH_RECIPES_BY_CATEGORY_FAIL,
    error: "SET DATA RECIPES BY CATEGORIES FAILED",
  };
};

export const fetchTotalRecipes = () => {
  return (dispatch) => {
    firebaseRecipes
      .orderByKey()
      .once("value")
      .then((snapshot) => {
        dispatch(countTotalRecipes(snapshot.numChildren()));
      })
      .catch((err) => {
        //dispatch method for setting error in state
      });
  };
};

export const countTotalRecipes = (total) => {
  return {
    type: actionTypes.COUNT_TOTAL_RECIPES,
    totalRecipes: total,
  };
};
