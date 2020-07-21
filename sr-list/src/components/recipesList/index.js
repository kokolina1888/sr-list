import React, { Component } from "react";
import RecipeFiltersBlock from "../recipeFiltersBlock";
import Recipes from "../recipes";

class RecipesList extends Component {
  
  render() {
    return (
      <div>
        <RecipeFiltersBlock />
        <Recipes title="Recipes" perPage="3" type="recipe-list"/>
      </div>
    );
  }
}

export default RecipesList;
