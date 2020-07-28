import React from "react";
import Link from "../UI/link";
import image from "../../images/recipes/r1.jpg";

import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";

const RecipeCard = ({title, image}) => {
  return (
    <div className={styles["recipe-container"]}>
      <img src={image} alt={title} />
      <div className={styles.btn}>
        <Link href="/">
          <FontAwesomeIcon className={styles.fav} icon={faHeart} />
        </Link>
        <Link href="/">       
          <FontAwesomeIcon className={styles.plus} icon={faPlus} />
        </Link>
      </div>
      <div className={styles["recipe-content"]}>
        <Link href="/" type="recipe">
          <h5>{title}</h5>
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
};

export default RecipeCard;
