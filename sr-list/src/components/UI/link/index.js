import React from 'react';
import { Link } from 'react-router-dom'
import styles from './link.module.css';

const LinkComponent = ({type, href, children, active}) => {
    let addClass = "";
    if (type) {
      addClass = type;
    }

    return (        
            <Link className={styles.link + ' ' + styles[addClass]} to={href}>
               {children}
            </Link>                      

       
    );
};

export default LinkComponent;