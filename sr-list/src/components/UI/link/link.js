import React from 'react';
import styles from './link.module.css';

const Link = ({type, href, children}) => {
    return (        
            <a className={styles.link} href={href}>
               {children}
            </a>                      

       
    );
};

export default Link;