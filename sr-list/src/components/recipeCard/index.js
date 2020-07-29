import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../store/actions";

import Link from "../UI/link";

import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";

class RecipeCard extends Component {
  async addToShoppinglistHandler(event) {
    event.preventDefault();
    let recipeData = [];
    //fetch recipe ingredients
    let searchBy = this.props.recipeId;
    const queryParams = '?orderBy="$key"&equalTo="' + searchBy + '"';
    const result = await axios
      .get("https://sr-list-ccafe.firebaseio.com/recipes.json" + queryParams)
      .then((res) => {
        for (let key in res.data) {
          recipeData.push({ ...res.data[key], id: key });
        }
        return recipeData[0];
      })
      .catch((err) => {});
    if (result) {
      this.props.onAddToShoppingList(result, this.props.userId);
    }
  }

  addToFavoritesHandler = (event) => {
    event.preventDefault();
    let recipeInFb = null;
    const data = {
      userId: this.props.userId,
      recipeId: this.props.recipeId,
      name: this.props.title,
      image: this.props.image,
      userRecipe: this.props.userId + this.props.recipeId,
    };
    //check if recipe is alreay in firebase
    const searchBy = this.props.userId + this.props.recipeId;
    const queryParams = '?orderBy="userRecipe"&equalTo="' + searchBy + '"';
    axios
      .get("https://sr-list-ccafe.firebaseio.com/favorites.json" + queryParams)
      .then((res) => {
        for (let key in res.data) {
          recipeInFb.push({ ...res.data[key], id: key });
        }
        if (!recipeInFb) {
          axios
            .post("https://sr-list-ccafe.firebaseio.com/favorites.json", data)
            .then((response) => {})
            .catch((error) => {
              console.log(error);
            });
          console.log("added to favorites - see favs count in nav bar!");
        }
      })
      .catch((err) => {});
  };

  render() {
    let addToBtns = "";
    if (this.props.isAuth) {
      addToBtns = (
        <Fragment>
          <Link href="/">
            <FontAwesomeIcon
              className={styles.plus}
              icon={faPlus}
              title="Add to shopping list!"
              onClick={(event) => this.addToShoppinglistHandler(event)}
            />
          </Link>
          <Link
            href="/"
            title="Add to favorites!"
            onClick={(event) => this.addToFavoritesHandler(event)}
          >
            <FontAwesomeIcon className={styles.fav} icon={faHeart} />
          </Link>
        </Fragment>
      );
    }
    return (
      <div className={styles["recipe-container"]}>
        <img src={this.props.image} alt={this.props.title} />
        <div className={styles.btn}>{addToBtns}</div>
        <div className={styles["recipe-content"]}>
          <Link href={"/recipe/" + this.props.recipeId} type="recipe">
            <h5>{this.props.title}</h5>
          </Link>
          <div className={styles["rating-container"]}>
            <FontAwesomeIcon className={styles.ratings} icon={faStar} />
            <FontAwesomeIcon className={styles.ratings} icon={faStar} />
            <FontAwesomeIcon className={styles.ratings} icon={faStar} />
            <FontAwesomeIcon className={styles.ratings} icon={faStar} />
            <FontAwesomeIcon className={styles.ratings} icon={faStar} />
          </div>
        </div>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddToShoppingList: (data, userId) =>
      dispatch(actions.addRecipeToShoppingList(data, userId)),
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(RecipeCard);
