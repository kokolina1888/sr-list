import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import RecipeCard from "../recipeCard";

import Spinner from "../UI/spinner";

import styles from "./index.module.css";

class Recipes extends Component {
  componentDidMount() {
    console.log(this.props)
    switch (this.props.type) {
      case "latest":
        this.props.onFetchLatestRecipes(this.props.nums);
        break;
      case "recipe-list":
        this.props.onFetchRecipesList(this.props.nums, this.props.startAt );
        break;
    }
  }

 
  render() {
    let recipes = <Spinner />;
    if (!this.props.loading) {
      recipes = this.props.recipesList.map((recipe) => (
        <div key={recipe.id} className="col-12 col-sm-6 col-lg-4">
          <RecipeCard title={recipe.name} />
        </div>
      ));
    }
    return (
      <section className={styles.latest}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles["latest-header"]}>
                <h3 className={styles.title}>{this.props.title}</h3>
              </div>
            </div>
          </div>
          <div className="row">{recipes}</div>
        </div>
      </section>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    recipesList: state.recipes.recipes,
    loading: state.recipes.loading,
    total: state.recipes.total_recipes,
    startAt: state.pagination.key
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLatestRecipes: (num) => dispatch(actions.fetchLatestRecipes(num)),
    onFetchRecipesList: (perPage, start ) => dispatch(actions.fetchRecipesList( perPage, start )),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Recipes);
