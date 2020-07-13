import React from 'react';
import styles from "./index.module.css";
import Link from "../UI/link/link";

const RecipeBlock = () => {
    return (
      <div className="container">
        <div className={styles.inner + " align-items-center"}>
          {/* <div className="col-12 col-md-9 col-lg-7 col-xl-6"> */}
          <div className={styles.content}>
            <h2 className={styles.title}>Delicios Homemade Burger</h2>
            <p className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tristique nisl vitae luctus sollicitudin. Fusce consectetur sem
              eget dui tristique, ac posuere arcu varius.
            </p>
            <Link className={styles.btn} href="#">
              See Receipe
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
};

export default RecipeBlock;