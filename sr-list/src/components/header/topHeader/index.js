import React from "react";
import styles from "./index.module.css";
import Link from "../../UI/link";
import Search from "../../UI/search";

import { connect } from "react-redux";
import * as actions from "../../../store/actions";

import Socials from "../../UI/socials";

const TopHeader = (props) => {
  const logOutHandler = () => props.onLogOut()
  return (
    <div className={styles["top-header"]}>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-between">
          <div className="col-12 col-sm-6">
            <Socials />
          </div>
          {/* <!-- Top Social Info --> */}
          <div className="col-12 col-sm-6">
            <div className={styles.profile + " text-right"}>
              <Search />
              {props.isAuth ? (
                <Link href="" onClick={()=>logOutHandler()}>User, Logout</Link>
              ) : (
                <Link href="/auth">Log In / Register</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(actions.logout())
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(TopHeader);
