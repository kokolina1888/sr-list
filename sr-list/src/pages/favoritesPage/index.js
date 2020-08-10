import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/breadcrumb";
import UserLayout from "../../components/layouts/userLayout";
import Link from "../../components/UI/link";
import Modal from "../../components/UI/modal";
import image from "../../images/core/placeholder-image.png";

import * as actions from "../../store/actions";
import styles from "./index.module.css";

class FavoritesPage extends Component {
  state = {
    recipes: null,
  };
  componentDidMount() {
    this.props.onFetchUserRecipes(this.props.userId);
  }
  async fetchUserRecipes(params) {
    const userId = this.props.userId;
    const queryParams = '?orderBy="userId"&equalTo="' + userId + '"';
    const userRecipes = await axios
      .get("https://sr-list-ccafe.firebaseio.com/favorites.json" + queryParams)
      .then((res) => {
        const fetchedRecipes = [];
        for (let key in res.data) {
          fetchedRecipes.push({ ...res.data[key], id: key });
        }
        return fetchedRecipes;
      })
      .catch((err) => {});

    this.setState({
      recipes: userRecipes,
    });
  }
  removeFromFavoritesHandler = (event, favId) => {
    event.preventDefault();
    this.props.onRemoveFromFavorites(favId, this.props.userId);
  };
  modalClickedHandler = () => {
    this.props.onResetFLMessages();
  };
  render() {
    let favorites = "No result!";
    if (this.props.recipes) {
      favorites = this.props.recipes.map((fav) => {
        let imgSrc = image 
        let recipeTitle = "Default Recipe Title"
        if (fav.image ){
          imgSrc = fav.image
        }
        if (fav.name){
          recipeTitle = fav.name
        }
          return (
            <div key={fav.id} className="col-12 col-lg-4">
              <div className="col-12 col-lg-12">
                <img
                  src={imgSrc}
                  className={styles.image}
                  alt={recipeTitle}
                />
              </div>
              <div className={styles.favtitle}>
                {recipeTitle}
                <div className={styles.btns}>
                  <Link
                    href={"/recipe/" + fav.recipeId}
                    type="shopping-list"
                    title="See recipe"
                  >
                    <FontAwesomeIcon className={styles.fav} icon={faEye} />
                  </Link>
                  <Link
                    href="#"
                    type="remove"
                    onClick={(event) =>
                      this.removeFromFavoritesHandler(event, fav.id)
                    }
                    title="Remove from Favorites"
                  >
                    <FontAwesomeIcon className={styles.fav} icon={faTrash} />
                  </Link>
                </div>
              </div>
            </div>
          );
      });
    }
    let modal = ''
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
        <Breadcrumb>Shopping List</Breadcrumb>
        <div className="receipe-content-area">
          <div className="container">
            <div className="row">{favorites}</div>
          </div>
        </div>
        {modal}
      </UserLayout>
    );
  }
}
const mapsStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    recipes: state.favoriteRecipes.recipes,
    successFL: state.favoriteRecipes.success,
    errorFL: state.favoriteRecipes.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromFavorites: (favId, userId) =>
      dispatch(actions.removeFromFavorites(favId, userId)),
    onFetchUserRecipes: (userId) => dispatch(actions.fetchUserRecipes(userId)),
    onResetFLMessages: () => dispatch(actions.resetFLMessages()),
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(FavoritesPage);
