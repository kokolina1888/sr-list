import React from "react";

import styles from "./index.module.css";
import Socials from "../UI/socials";
import Link from "../UI/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="h-100 d-flex flex-wrap align-items-center justify-content-between">
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logo}>SR list</span>
          </Link>
        </div>
        <div className={styles.socials}>
          <Socials />
        </div>
        <div>
          Copyright &copy;<script>2020</script> All rights reserved | This
          template is made by
          <Link href="https://colorlib.com" target="_blank">
            Colorlib
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
