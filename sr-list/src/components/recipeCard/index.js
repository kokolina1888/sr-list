import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Link from "../UI/link";

import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";

class RecipeCard extends Component {
  render() {
    let addToBtns = "";
    if (this.props.isAuth) {
      addToBtns = (
        <Fragment>
          <Link href="/">
            <FontAwesomeIcon className={styles.plus} icon={faPlus} title="Add to shopping list!"/>
          </Link>
          <Link href="/" title='Add to favorites!'>
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
          <Link href="/recipe/:recipe" type="recipe">
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
  };
};

export default connect(mapsStateToProps)(RecipeCard);
