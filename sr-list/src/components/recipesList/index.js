import React, { Component } from "react";
import RecipeFiltersBlock from "../recipeFiltersBlock";
import Recipes from "../recipes";

class RecipesList extends Component {
  
  render() {
    return (
      <div>
        <RecipeFiltersBlock categories={this.props.categories}/>
        <Recipes title="Recipes" perPage="9" type="recipe-list"/>
      </div>
    );
  }
}

export default RecipesList;
