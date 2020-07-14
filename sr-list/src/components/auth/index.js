import React, { Component } from "react";
import Input from "../UI/form/input";
import styles from "./index.module.css";
import Button from "../UI/button";
import Link from "../UI/link/link";

class Auth extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-8 offset-2">
          <div className={styles["delicious-tabs-content"]}>
            <div className={styles["wrapper"]}>
              <div className={styles["btn-container"]}>
                <Link href="" type="auth">
                  Login
                </Link>
              </div>
              <div className={styles["btn-container"]}>
                <Link href="/" type="active">
                  Register
                </Link>
              </div>
            </div>

            <div className="delicious-tab-content">
              <div className="col-12">
                <Input
                  place="auth"
                  type="text"
                  name="username"
                  placeholder="Your username ..."
                />
                <Input
                  place="auth"
                  type="email"
                  name="email"
                  placeholder="Your email ..."
                />
                <Input
                  place="auth"
                  type="password"
                  name="password"
                  placeholder="Your password ..."
                />
                <Input
                  place="auth"
                  type="password"
                  name="passwordConfirm"
                  placeholder="Repeat password ..."
                />

                <Button type="auth-register">Register</Button>
                <Button type="auth-login">Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
