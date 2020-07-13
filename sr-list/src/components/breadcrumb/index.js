import React from "react";

import styles from "./index.module.css";

const Recipe = (props) => {
  return (
    <div className={styles.container + " bg-img bg-overlay"}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="breadcumb-text text-center">
              <h2 className={styles["breadcumb-title"]}>{props.children}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
