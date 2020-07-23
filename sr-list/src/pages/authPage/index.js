import React, { Component } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions";

import UserLayout from "../../components/layouts/userLayout";
import Input from "../../components/UI/form/input";
import styles from "./index.module.css";
import Button from "../../components/UI/button";
import Link from "../../components/UI/link";

import {
  checkFormElementValidity
} from "../../shared/validation";

class Auth extends Component {
  state = {
    controls: {
      email: {
        value: "",
        required: true,
        errorMessage: "",
        validation: "email",
        valid: false,
        touched: false,
      },
      password: {
        value: "",
        required: true,
        errorMessage: "",
        validation: "minLength:4",
        valid: false,
        touched: false,
      },
      passwordConfirm: {
        value: "",
        required: true,
        errorMessage: "",
        validation: "equalTo:password",
        valid: false,
        touched: false,
      },
    },
    isValidForm: false,
  };
  checkIsValidForm = () => {
    //check if form is valid to enable submit button
    let valid = true;
    let controls = [this.state.controls.email, this.state.controls.password];
    if ( this.props.isSignUp ){
      controls.push(this.state.controls.passwordConfirm)
    }
    
    for (let ind in controls) {
      if (controls[ind].required) {
        if (!controls[ind].value.trim() !== "" && !controls[ind].valid) {
          valid = false;
          break;
        }
      }
    }
    if (valid) {
      this.setState({ isValidForm: true });
    } else {
      this.setState({ isValidForm: false });
    }
  };
  switchModeHandler = (e) => {
    e.preventDefault();
    this.props.onSwitchAuthModeHandler(!this.props.isSignUp);
  };

  submitHandler = (e) => {
    e.preventDefault();
    const dataAuth = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    //enable submit button if all fields are valid and required are non empty
    this.props.onAuth(dataAuth, this.props.isSignUp);
  };

  inputChangedHandler = (event, controlName) => {
    let rules = this.state.controls[controlName].validation;
    let result = {};
    let validationArr = rules.split(":");
    result = checkFormElementValidity(event.target.value, rules);
    if (validationArr[0] === "equalTo") {
      let equalToFieldValue = this.state.controls[validationArr[1]].value;
      if (equalToFieldValue !== event.target.value) {
        result = {
          valid: false,
          message: "The field must be equal to " + validationArr[1] + "!",
        };
      }
    }
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: result.valid,
        errorMessage: result.message,
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };
  render() {
    let authRedirect = null;
    if (this.props.isAuth) {
      authRedirect = <Redirect to={this.props.redirectPath} />;
    }

    let loginClasses = styles["btn-container"];
    let signUpClasses = styles["btn-container"];
    let form = null;
    if (this.props.isSignUp) {
      signUpClasses += " " + styles.active;
      form = (
        <div className="delicious-tab-content">
          <div className="col-12">
            <form onSubmit={this.state.isValidForm ? this.submitHandler : null}>
              <Input
                place="auth"
                type="email"
                placeholder="Your email ..."
                changed={(e) => this.inputChangedHandler(e, "email")}
                isValid={this.state.controls.email.valid}
                errorMessage={this.state.controls.email.errorMessage}
                touched={this.state.controls.email.touched}
                key="email"
                blurred={this.checkIsValidForm}
              />

              <Input
                place="auth"
                type="password"
                placeholder="Your password ..."
                changed={(e) => this.inputChangedHandler(e, "password")}
                isValid={this.state.controls.password.valid}
                errorMessage={this.state.controls.password.errorMessage}
                touched={this.state.controls.password.touched}
                key="password"
                blurred={this.checkIsValidForm}
              />

              <Input
                place="auth"
                type="password"
                placeholder="Repeat password ..."
                changed={(e) => this.inputChangedHandler(e, "passwordConfirm")}
                isValid={this.state.controls.passwordConfirm.valid}
                errorMessage={this.state.controls.passwordConfirm.errorMessage}
                touched={this.state.controls.passwordConfirm.touched}
                key="passwordConfirm"
                blurred={this.checkIsValidForm}
              />

              <Button type="auth-register" disabled={!this.state.isValidForm}>
                Register
              </Button>
            </form>
          </div>
        </div>
      );
    } else {
      loginClasses += " " + styles.active;
      form = (
        <div className="delicious-tab-content">
          <div className="col-12">
            <form onSubmit={this.state.isValidForm ? this.submitHandler : null}>
              <Input
                place="auth"
                type="email"
                placeholder="Your email ..."
                changed={(e) => this.inputChangedHandler(e, "email")}
                isValid={this.state.controls.email.valid}
                errorMessage={this.state.controls.email.errorMessage}
                touched={this.state.controls.email.touched}
                key="email"
                blurred={this.checkIsValidForm}
              />

              <Input
                place="auth"
                type="password"
                placeholder="Your password ..."
                changed={(e) => this.inputChangedHandler(e, "password")}
                isValid={this.state.controls.password.valid}
                errorMessage={this.state.controls.password.errorMessage}
                touched={this.state.controls.password.touched}
                key="password"
                blurred={this.checkIsValidForm}
              />

              <Button type="auth-login" disabled={!this.state.isValidForm}>
                Login
              </Button>
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
              {authRedirect}
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
    redirectPath: state.auth.redirectPath,
    isAuth: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchAuthModeHandler: (type) => dispatch(actions.setUserAuthType(type)),
    onAuth: (data, isSignup) => dispatch(actions.auth(data, isSignup)),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(Auth);
