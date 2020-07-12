import React from 'react';
import Search from '../../../UI/search/search';
import Link from '../../../UI/link/link';
import styles from './menu.module.css';

const Menu = () => {
    return (
      <div class={styles.nav}>
          <ul>
            <li className={styles["list-item"]}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/">Info</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/">Recipes</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/">Blog</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/">Shopping List</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/">Add Recipe</Link>
            </li>
          </ul>
      </div>
    );
};

export default Menu;