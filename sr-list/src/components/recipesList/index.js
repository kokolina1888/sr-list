import React, { Component } from "react";
import RecipeFiltersBlock from "../recipeFiltersBlock";
import Recipes from "../recipes";

class RecipesList extends Component {
  
  render() {
    return (
      <div>
        <RecipeFiltersBlock />
        <Recipes title="Recipes" nums="12"/>
      </div>
    );
  }
}

export default RecipesList;
