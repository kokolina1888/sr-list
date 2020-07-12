import React from "react";
import Link from "../UI/link/link";
import image from "../../images/recipes/r1.jpg";

import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RecipeCard = () => {
  return (
    <div className={styles["recipe-container"]}>
      <img src={image} alt="Vegan Smoothie" />
      <div className={styles.btn}>
        <Link>Fav</Link>
        <Link>Add to SL</Link>
      </div>
      <div className={styles["recipe-content"]}>
        <Link>
          <h5>Vegan Smoothie</h5>
        </Link>
        <div className={styles['rating-container']}>
          <FontAwesomeIcon className={styles.ratings} icon={faStar} />
          <FontAwesomeIcon className={styles.ratings} icon={faStar} />
          <FontAwesomeIcon className={styles.ratings} icon={faStar} />
          <FontAwesomeIcon className={styles.ratings} icon={faStar} />
          <FontAwesomeIcon className={styles.ratings} icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
