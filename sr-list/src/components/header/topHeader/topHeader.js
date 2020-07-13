import React from "react";
import styles from "./topHeader.module.css";
import Link from "../../UI/link/link";
import Search from "../../UI/search/search";

import Socials from '../../UI/socials';



const TopHeader = () => {
  return (
    //    <!-- Top Header Area -->
    <div className={styles["top-header"]}>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-between">
          <div className="col-12 col-sm-6">
            <Socials/>
          </div>
          {/* <!-- Top Social Info --> */}
          <div className="col-12 col-sm-6">
            <div className={styles.profile + " text-right"}>
              <Search />
              <Link href="/">Log In / Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
