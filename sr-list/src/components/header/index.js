import React from "react";
import TopHeader from "./topHeader";
import NavBar from "./navBar";
import styles from './index.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <TopHeader />
      <NavBar />
    </header>
  );
};

export default Header;
