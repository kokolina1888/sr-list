import React from "react";
import RecipeCard from "../recipeCard";

import styles from "./index.module.css";

const Recipes = (props) => {
  return (
    <section className={styles.latest}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles["latest-header"]}>
              <h3 className={ styles.title}>{ props.title }</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- Single Best Receipe Area --> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <RecipeCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <RecipeCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <RecipeCard />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <RecipeCard />
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <RecipeCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <RecipeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
