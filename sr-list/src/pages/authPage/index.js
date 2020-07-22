import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import UserLayout from "../../components/layouts/userLayout";
import Input from "../../components/UI/form/input";
import styles from "./index.module.css";
import Button from "../../components/UI/button";
import Link from "../../components/UI/link";

class Auth extends Component {
  state = {
    controls: {
      email: {
        value: "",
      },
      password: {
        value: "",
      },
      passwordConfirm: {
        value: "",
      },
    },
  };
  switchModeHandler = (e) => {
    e.preventDefault();
    this.props.onSwitchAuthModeHandler(!this.props.isSignUp);
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.controls);
    const dataAuth = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    }
    this.props.onAuth(dataAuth, this.props.isSignUp)
  };

  inputChangedHandler = (event, controlName) => {
    console.log(controlName);
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
      },
    };
    this.setState({ controls: updatedControls });
  };
  render() {
    let loginClasses = styles["btn-container"];
    let signUpClasses = styles["btn-container"];
    let form = null;
    if (this.props.isSignUp) {
      signUpClasses += " " + styles.active;
      form = (
        <div className="delicious-tab-content">
          <div className="col-12">
            <form onSubmit={this.submitHandler}>
              <Input
                place="auth"
                type="email"
                name="email"
                placeholder="Your email ..."
                changed={(e) => this.inputChangedHandler(e, "email")}
              />

              <Input
                place="auth"
                type="password"
                name="password"
                placeholder="Your password ..."
                changed={(e) => this.inputChangedHandler(e, "password")}
              />

              <Input
                place="auth"
                type="password"
                name="passwordConfirm"
                placeholder="Repeat password ..."
                changed={(e) => this.inputChangedHandler(e, "passwordConfirm")}
              />

              <Button type="auth-register">Register</Button>
            </form>
          </div>
        </div>
      );
    } else {
      loginClasses += " " + styles.active;
      form = (
        <div className="delicious-tab-content">
          <div className="col-12">
            <form onSubmit={this.submitHandler}>
              <Input
                place="auth"
                type="email"
                name="email"
                placeholder="Your email ..."
                changed={(e) => this.inputChangedHandler(e, "email")}
              />

              <Input
                place="auth"
                type="password"
                name="password"
                placeholder="Your password ..."
                changed={(e) => this.inputChangedHandler(e, "password")}
              />

              <Button type="auth-login">Login</Button>
            </form>
          </div>
        </div>
      );
    }
    let btns = (
      <div className={styles["wrapper"]}>
        <div className={loginClasses}>
          <Link
            href=""
            type="auth"
            action="login"
            onClick={this.switchModeHandler}
          >
            Login
          </Link>
        </div>
        <div className={signUpClasses}>
          <Link
            href="/"
            type="auth"
            action="signup"
            onClick={this.switchModeHandler}
          >
            Register
          </Link>
        </div>
      </div>
    );
    return (
      <UserLayout>
        <div className="container">
          <div className="col-lg-8 offset-2">
            <div className={styles["delicious-tabs-content"]}>
              {btns}
              {form}
            </div>
          </div>
        </div>
      </UserLayout>
    );
  }
}
const mapsStateToProps = (state) => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    isSignUp: state.auth.isSignUp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchAuthModeHandler: (type) => dispatch(actions.setUserAuthType(type)),
    onAuth: (data, isSignup) =>
      dispatch(actions.auth(data, isSignup)),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Auth);
