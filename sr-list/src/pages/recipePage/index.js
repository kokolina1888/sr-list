import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import axios from "axios";
import UserLayout from "../../components/layouts/userLayout";
import Breadcrumb from "../../components/breadcrumb";
import Spinner from "../../components/UI/spinner";
import Button from "../../components/UI/button";
import Modal from "../../components/UI/modal";

import styles from "./index.module.css";
import { firebaseRecipes } from "../../firebase";
import { plainObject } from "../../shared/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";

class Recipe extends Component {
  state = {
    recipe: null,
  };
  componentDidMount() {
    firebaseRecipes
      .orderByKey()
      .startAt(this.props.match.params.recipe)
      .limitToFirst(1)
      .once("value")
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((childSnapshot) => {
          data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
          });
        });
        this.setState({
          recipe: data[0],
        });
      })
      .catch((err) => {});

    this.props.onFetchUnits();
    this.props.onFetchProducts();
    this.props.onFetchCategories();
  }

  addRecipeToShoppingListHandler = () => {
    let result = {};
    result = this.state.recipe;
    this.props.onAddToShoppingList(result, this.props.userId);
  };
  async addRecipeToFavoritesListHandler() {
    const data = {
      userId: this.props.userId,
      recipeId: this.state.recipe.id,
      name: this.state.recipe.name,
      image: this.state.recipe.image,
      userRecipe: this.props.userId + this.state.recipe.id,
    };
    let recipeData = [];
    //fetch recipe
    let searchBy = this.props.userId + this.state.recipe.id;
    const queryParams = '?orderBy="userRecipe"&equalTo="' + searchBy + '"';
    //check if recipe alredy in db
    const result = await axios
      .get("https://sr-list-ccafe.firebaseio.com/favorites.json" + queryParams)
      .then((res) => {
        for (let key in res.data) {
          recipeData.push({ ...res.data[key], id: key });
        }
        return recipeData[0];
      })
      .catch((err) => {});
    // if not in db - add it
    if (!result) {
      this.props.onAddToFavorites(data, this.props.userId);
    } else {
      this.props.onAddToFavoritesFail("Recipe Already in Favorites List!");
    }
  }
  modalClickedHandler = (event, type) => {
    if (type === "fl") {
      this.props.onResetFLMessages();
    }
    if (type === "sl") {
      this.props.onResetSLMessages();
    }
  };
  render() {
    const products = plainObject(this.props.products);
    const units = plainObject(this.props.units);
    let recipeData = <Spinner />;
    let btnsGroup = "";
    if (this.props.isAuth) {
      btnsGroup = (
        <div>
          <div
            className={styles["btn-container"]}
            title="ADD TO SHOPPING LIST!"
          >
            <Button
              type="add-to-sl"
              clicked={() => this.addRecipeToShoppingListHandler()}
            >
              <FontAwesomeIcon
                className={styles.plus}
                icon={faPlus}
                title="Add to shopping list!"
              />
            </Button>
          </div>
          <div className={styles["btn-container"]} title="ADD TO FAVORITES!">
            <Button
              type="add-to-fl"
              clicked={() => this.addRecipeToFavoritesListHandler()}
            >
              <FontAwesomeIcon className={styles.fav} icon={faHeart} />
            </Button>
          </div>
        </div>
      );
    }
    if (this.state.recipe) {
      const data = this.state.recipe;
      recipeData = (
        <Fragment>
          <div className="row">
            <div className="col-12 col-md-12">
              <div className={styles.headline + " my-5"}>
                <h2>{data.name}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-md-8">
              <div className={styles.info}>
                <img className={styles.img} src={data.image} alt="" />
              </div>
              <div className={styles.info}>
                <div className={styles.prep}>
                  <h6>Prep: {data.prepTime} min</h6>
                  <h6>Servings: {data.servings} </h6>
                </div>
                {btnsGroup}
              </div>
              <div className="col-12">
                <div className={styles.desc + " d-flex"}>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className={styles.ingredients}>
                <h4>Ingredients</h4>
                {data.ingredients.map((ing) => {
                  return (
                    <div
                      className="custom-control custom-checkbox"
                      key={ing.id}
                    >
                      <span
                        className="custom-control-span"
                        htmlFor="customCheck1"
                      >
                        {ing.productQuantity} {units[ing.units]}{" "}
                        {products[ing.productName]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
    let modal = "";
    console.log(this.props.successSL);
    console.log(this.props.successFL);
    console.log(this.props.errorFL);
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
      <UserLayout>
        <Breadcrumb>Recipe</Breadcrumb>
        <div className="receipe-content-area">
          <div className="container">{recipeData}</div>
        </div>
        {modal}
      </UserLayout>
    );
  }
}
const mapsStateToProps = (state) => {
  return {
    units: state.units.units,
    products: state.products.products,
    categories: state.categories.categories,
    isAuth: state.auth.token !== null,
    userId: state.auth.userId,
    successSL: state.shoppingList.success,
    successFL: state.favoriteRecipes.success,
    errorFL: state.favoriteRecipes.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUnits: () => dispatch(actions.fetchUnits()),
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onAddToShoppingList: (data, userId) =>
      dispatch(actions.addRecipeToShoppingList(data, userId)),
    onAddToFavorites: (data, userId) =>
      dispatch(actions.addToFavorites(data, userId)),
    onAddToFavoritesFail: (message) =>
      dispatch(actions.setAddToFavoritesFailedMessage(message)),
    onResetFLMessages: () => dispatch(actions.resetFLMessages()),
    onResetSLMessages: () => dispatch(actions.resetSLMessages()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Recipe);
