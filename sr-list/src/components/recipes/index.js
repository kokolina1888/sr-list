import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import RecipeCard from "../recipeCard";
import Spinner from "../UI/spinner";
import styles from "./index.module.css";
import Pagination from "../pagination";
import Modal from '../UI/modal'

class Recipes extends Component {
  componentDidMount() {
    switch (this.props.type) {
      case "latest":
        this.props.onFetchLatestRecipes(this.props.perPage);
        break;
      case "recipe-list":
        this.props.onFetchInitList(this.props.perPage);
        this.props.onFetchInitKey(this.props.perPage);
        break;
      default:
        break;
    }
  }
  handleLoadRecipesList = (event) => {
    event.preventDefault();
    if (event.target.attributes.dir.value === "prev") {
      this.props.onFetchFirstList(this.props.perPage);
    } else {
      this.props.onFetchNextList(this.props.perPage, this.props.lastKey);
      this.props.onFetchNextKey(this.props.perPage, this.props.lastKey);
    }
  };
  render() {
    let recipes = <Spinner />;
    if (!this.props.loading) {
      recipes = this.props.recipesList.map((recipe) => (
        <div key={recipe.id} className="col-12 col-sm-6 col-lg-4">
          <RecipeCard title={recipe.name} image={recipe.image} recipeId={recipe.id}/>
        </div>
      ));
    }
    let pagination = null;
    if (this.props.type !== "latest") {
      pagination = (
        <Pagination onClick={(event) => this.handleLoadRecipesList(event)} />
      );
    }
    let modal = ''
    console.log(this.props.errorFL);
    if(this.props.error){
      modal = <Modal message={this.props.error} type="error" />;
    } else if( this.props.successSL ){
      modal = <Modal message={this.props.successSL} type="success" />;
    } else if ( this.props.successFL ){
      modal = <Modal message={this.props.successFL} type="success" />;
    } else if (this.props.errorFL ){
      modal = <Modal message={this.props.errorFL} type="warning" />;
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
          {pagination}
          {modal}
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
    userId: state.auth.userId,
    isAuth: state.auth.token !== null,
    successSL: state.shoppingList.success,
    successFL: state.favoriteRecipes.success,
    errorFL: state.favoriteRecipes.error
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
    onFetchInitKey: (num) => dispatch(actions.fetchInitKey(num)),
    onFetchNextKey: (num, lastKey) =>
      dispatch(actions.fetchNextKey(num, lastKey)),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Recipes);
