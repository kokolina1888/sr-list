import React from "react";
import TopHeader from "./topHeader/topHeader";
import NavBar from "./navBar/navBar";
import styles from './header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <TopHeader />
      <NavBar />
    </header>
  );
};

export default Header;
