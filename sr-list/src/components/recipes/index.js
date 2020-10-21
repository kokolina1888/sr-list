import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import RecipeCard from "../recipeCard";
import Spinner from "../UI/spinner";
import styles from "./index.module.css";
import Pagination from "../pagination";
import Modal from "../UI/modal";

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
  modalClickedHandler = (event, type) => {
    if (type === "fl") {
      this.props.onResetFLMessages();
    }
    if (type === "sl") {
      this.props.onResetSLMessages();
    }
  };
  
  render() {
    let recipes = <Spinner />;
    if (!this.props.loading) {
      recipes = this.props.recipesList.map((recipe) => (
        <div key={recipe.id} className="col-12 col-sm-6 col-lg-4">
          <RecipeCard
            title={recipe.name}
            image={recipe.image}
            recipeId={recipe.id}
          />
        </div>
      ));
    }
    let pagination = null;
    if (this.props.type !== "latest") {
      pagination = (
        <Pagination onClick={(event) => this.handleLoadRecipesList(event)} />
      );
    }
    let modal = "";

    if (this.props.successSL) {
      modal = (
        <Modal
          message={this.props.successSL}
          type="success"
          clicked={(event) => this.modalClickedHandler(event, "sl")}
        />
      );
    }
    if (this.props.successFL) {
      modal = (
        <Modal
          message={this.props.successFL}
          type="success"
          clicked={(event) => this.modalClickedHandler(event, "fl")}
        />
      );
    }
    if (this.props.errorFL) {
      modal = (
        <Modal
          message={this.props.errorFL}
          type="warning"
          clicked={(event) => this.modalClickedHandler(event, "fl")}
        />
      );
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
    errorFL: state.favoriteRecipes.error,
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
    onResetFLMessages: () => dispatch(actions.resetFLMessages()),
    onResetSLMessages: () => dispatch(actions.resetSLMessages()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Recipes);
