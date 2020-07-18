import React from 'react';
import Link from '../../../UI/link';
import styles from './index.module.css';

const Menu = () => {
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
            <li className={styles["list-item"]}>
              <Link href="/shopping-list">Shopping List</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/add-recipe">Add Recipe</Link>
            </li>
          </ul>
      </div>
    );
};

export default Menu;