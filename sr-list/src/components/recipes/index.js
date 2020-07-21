import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import RecipeCard from "../recipeCard";

import Spinner from "../UI/spinner";

import styles from "./index.module.css";
import Button from "../UI/button";
import Pagination from "../pagination";

class Recipes extends Component {
  componentDidMount() {
    switch (this.props.type) {
      case "latest":
        this.props.onFetchLatestRecipes(this.props.perPage);
        break;
      case "recipe-list":
        this.props.onFetchInitList(this.props.perPage);
        this.props.onFetchInitKey(this.props.perPage)
        break;
    }
  }
  handleLoadRecipesList = (event) => {
    event.preventDefault()
    // console.log(event.target.attributes.dir.value);
    if(event.target.attributes.dir.value === "prev"){
      console.log('prev')
      this.props.onFetchFirstList(this.props.perPage)
    } else {
      console.log('next')
      this.props.onFetchNextList(this.props.perPage, this.props.lastKey);
      this.props.onFetchNextKey(this.props.perPage, this.props.lastKey);

    }
  }
  render() {
    console.log(this.props.lastKey);
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
          <Pagination onClick={(event) => this.handleLoadRecipesList(event)} />
        </div>
      </section>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    recipesList: state.recipes.recipes,
    loading: state.recipes.loading,
    error: state.recipes.error,
    lastKey: state.recipes.lastKey,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLatestRecipes: (num) => dispatch(actions.fetchLatestRecipes(num)),
    onFetchInitList: (num) => dispatch(actions.fetchInitRecipesList(num)),
    onFetchFirstList: (num, lastKey) =>
      dispatch(actions.fetchInitRecipesList(num)),
    onFetchNextList: (num, lastKey) =>
      dispatch(actions.fetchNextRecipesList(num, lastKey)),
    onFetchInitKey: ( num ) => dispatch(actions.fetchInitKey(num)),
    onFetchNextKey: (num, lastKey) => dispatch(actions.fetchNextKey(num, lastKey))
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Recipes);
