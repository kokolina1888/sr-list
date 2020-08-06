import React, { Fragment } from "react";
import styles from './index.module.css';


const Button = (props) => {
  let addClass = '';
  if(props.type){
    addClass = props.type;
  }
  return (
    <Fragment>
      <button className={styles[addClass]} disabled={props.disabled} onClick={props.clicked} title={props.title}>
        {props.children}
      </button>
     
    </Fragment>
  );
 
};

export default Button;
