import * as actionTypes from "../actions/actionTypes";

const initialState = {  
  recipesCount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {    
    case actionTypes.COUNT_FAVORITE_RECIPES:
      return { ...state, recipesCount: action.recipesCount };
    default:
      return state;
  }
};
export default reducer;

