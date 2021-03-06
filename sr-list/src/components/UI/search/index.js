import React from 'react';
import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Link from '../link';



const Search = () => {
    return (
      <div className={styles.search}>
        <Link href="/">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
      </div>
    );
};

export default Search;