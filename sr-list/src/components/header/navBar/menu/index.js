import React, { Fragment } from "react";
import Link from "../../../UI/link";
import styles from "./index.module.css";
import { connect } from "react-redux";

const Menu = (props) => {
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
        {props.isAuth ? (
          <Fragment>
            <li className={styles["list-item"]}>
              <Link href="/shopping-list">Shopping List</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/add-recipe">Add Recipe</Link>
            </li>
          </Fragment>
        ) : null}
      </ul>
    </div>
  );
};
const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapsStateToProps)(Menu);
