import React from 'react';
import Menu from './menu/menu';
import Link from '../UI/link/link';
import logo from '../../images/core/logo.png';

import styles from './navBar.module.css';

const NavBar = () => {
    return (
        <div class={styles.nav}>
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <nav class={ styles.navbar + " justify-content-between" }>
                        <Link>
                            <img src={logo}/>
                        </Link>
                        <Menu/>  
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;