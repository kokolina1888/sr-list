import React from 'react';
import styles from './link.module.css';

const Link = ({type, href, children, active}) => {
    let addClass = "";
    if (type) {
      addClass = type;
    }

    return (        
            <a className={styles.link + ' ' + styles[addClass]} href={href}>
               {children}
            </a>                      

       
    );
};

export default Link;