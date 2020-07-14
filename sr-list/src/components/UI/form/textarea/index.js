import React from 'react';

import styles from "./index.module.css";


const Textarea = (props) => {
    return (
      <textarea
        name={props.name}
        className={styles["textarea"]}
        cols={props.cols}
        rows={props.rows}
        placeholder={props.placeholder}
      ></textarea>
    );
};

export default Textarea;