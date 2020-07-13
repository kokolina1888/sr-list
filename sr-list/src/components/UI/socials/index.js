import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from '../link/link'
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faLaravel,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

import styles from './index.module.css';



const Socials = () => {
    return (
      <div className={styles.socials}>
        <Link href="/">
          <FontAwesomeIcon icon={faLaravel} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faPinterest} />
        </Link>
      </div>
    );
};

export default Socials;