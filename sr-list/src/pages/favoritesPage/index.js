import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import UserLayout from "../../components/layouts/userLayout";
import Breadcrumb from "../../components/breadcrumb";
import Link from "../../components/UI/link";
import styles from "./index.module.css";

class FavoritesPage extends Component {
  state = {
    recipes: null,
  };
  componentDidMount() {
    const userId = this.props.userId;
    const queryParams = '?orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("https://sr-list-ccafe.firebaseio.com/favorites.json" + queryParams)
      .then((res) => {
        const fetchedRecipes = [];
        for (let key in res.data) {
          fetchedRecipes.push({ ...res.data[key], id: key });
        }
        this.setState({ recipes: fetchedRecipes });
      })
      .catch((err) => {});
  }
  render() {
    let favorites = "No result!";
    if (this.state.recipes) {
      favorites = this.state.recipes.map((fav) => {
        return (
          <div key={fav.id} className="col-12 col-lg-4">
            <div className="col-12 col-lg-12">
              <img src={fav.image} className={styles.image} />
            </div>
            <div className={styles.favtitle}>
              {fav.name}
              <Link href="/recipe/fav.recipeId" type="shopping-list">
                See recipe...
              </Link>
            </div>
          </div>
        );
      });
    }
    return (
      <UserLayout>
        <Breadcrumb>Shopping List</Breadcrumb>
        <div className="receipe-content-area">
          <div className="container">
            <div className="row">{favorites}</div>
          </div>
        </div>
      </UserLayout>
    );
  }
}
const mapsStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};

export default connect(mapsStateToProps)(FavoritesPage);
