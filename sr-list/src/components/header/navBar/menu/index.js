import React, { Fragment, Component } from "react";
import * as actions from '../../../../store/actions'
import Link from "../../../UI/link";
import styles from "./index.module.css";
import { connect } from "react-redux";

class Menu extends Component {
  componentDidMount(){
    if( this.props.isAuth ){
      this.props.onCountUserShoppingListRecipes(this.props.userId);
      this.props.onCountUserFavoriteRecipes(this.props.userId)
    }
  }
  render() {
    return (
      <div className={styles.nav}>
        <ul>
          <li className={styles["list-item"]}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href="/info">Info</Link>
          </li>
          <li className={styles["list-item"]}>
            <Link href="/recipes">Recipes</Link>
          </li>
          {this.props.isAuth ? (
            <Fragment>
              <li className={styles["list-item"]}>
                <Link href="/shopping-list">Shopping List ({this.props.shoppingListRecipes})</Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/favorites">Favorites ({this.props.favoriteRecipes})</Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/add-recipe">Add Recipe</Link>
              </li>
            </Fragment>
          ) : null}
        </ul>
      </div>
    );
  }
}
const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    userId: state.auth.userId,
    shoppingListRecipes: state.shoppingList.recipesCount,
    favoriteRecipes: state.favoriteRecipes.recipesCount
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCountUserShoppingListRecipes: (userId) =>
      dispatch(actions.countUserShoppingListRecipes(userId)),
    onCountUserFavoriteRecipes: (userId) =>
      dispatch(actions.countUserFavoriteRecipes(userId)),
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Menu);
