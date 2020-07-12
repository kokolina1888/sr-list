import React from 'react';
import Menu from './menu/menu';
import Link from '../UI/link/link';
import logo from '../../images/core/logo.png';

const NavBar = () => {
    return (
        <div class="delicious-main-menu">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <nav class="classy-navbar justify-content-between" id="deliciousNav">
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