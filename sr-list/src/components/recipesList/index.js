import React, { Component } from "react";
import RecipeFiltersBlock from "../recipeFiltersBlock";
import Recipes from "../recipes";

import Pagination from "../../components/pagination";

class RecipesList extends Component {
  
  render() {
    return (
      <div>
        <RecipeFiltersBlock />
        <Recipes title="Recipes" nums="3" type="recipe-list"/>
        <Pagination perPage="3"/>
      </div>
    );
  }
}

export default RecipesList;
