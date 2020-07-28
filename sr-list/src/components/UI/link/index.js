import React from "react";
import { Link } from "react-router-dom";
import styles from "./link.module.css";

const LinkComponent = (props) => {
  let addClass = "";
  if (props.type) {
    addClass = props.type;
  }

  return (
    <Link
      className={styles.link + " " + styles[addClass]}
      to={props.href}
      onClick={props.onClick}
      action={props.action}
      type={props.type}
      title={props.title}
    >
      {props.children}
    </Link>
  );
};

export default LinkComponent;
