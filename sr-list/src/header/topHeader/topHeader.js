import React from "react";
import styles from "./topHeader.module.css";
import Link from "../UI/link/link";

const TopHeader = () => {
  return (
    //    <!-- Top Header Area -->
    <div className={styles["top-header"]}>
      <div className="container h-100">
        <div class="row h-100 align-items-center justify-content-between">
          <div className="col-12 col-sm-6">
            <div className={styles.ticker}>
              <Link href="/">FB</Link>
              <Link href="/">YouTuBe</Link>
            </div>
          </div>
          {/* <!-- Top Social Info --> */}
          <div class="col-12 col-sm-6">
            <div className={styles.profile + " text-right"}>
              <Link href="/">Log In / Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
