import React from 'react';
import styles from './index.module.css'

const Pagination = (props) => {
  return (
    <div className={styles.container}>
      <a className={styles.nav + ' ' + styles.top} dir="prev" onClick={props.onClick} href="/">
        Top
      </a>
      <a
        className={styles.nav + ' ' + styles.next}
        href="/"
        type="pagination"
        dir="next"
        onClick={props.onClick}
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;