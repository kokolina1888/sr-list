import React from 'react';
import Menu from './menu/menu';
import Link from '../../UI/link/link';

import styles from './navBar.module.css';

const NavBar = () => {
    return (
      <div className={styles.nav}>
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav className={styles.navbar + " justify-content-between"}>
              <Link href="/">
                <span className={styles.logo}>SR list</span>
                {/* <img src={logo} /> */}
              </Link>
              <Menu />
            </nav>
          </div>
        </div>
      </div>
    );
};

export default NavBar;