import React from 'react';
import styles from './index.module.css';
import RecipeBlock from '../recipeBlock';

const Banner = ({ type }) => {
    return (
      <section className={styles["banner-container"]}>
        <div className={styles.slides}>          
          <div className={styles[type  + "-single-slide"]}>
    { type === "home" ? <RecipeBlock/> : null }
          </div>
        </div>
      </section>
    );
};

export default Banner;