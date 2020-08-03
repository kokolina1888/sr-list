import React, { useState} from 'react';
import styles from "./link.module.css";

const Modal = (props) => {
    const [data, setStyles] = useState({
      modalVisible: true
    });    
    
    const type = props.type

    const onClickHandler = () => {
        setStyles({
            modalVisible: false
        })
    }

    let modalStyle = "";
    let wrapperStyle = ""
    if( data.modalVisible ){
        modalStyle = styles[type] + " " + styles["modal-container"];
        wrapperStyle = styles.wrapper

    } else {
        modalStyle = styles["hidden-modal-container"];
        wrapperStyle = styles["hidden-wrapper"]
    }
    return (
      <div className={wrapperStyle}>
        <span onClick={onClickHandler}>x</span>
        <div className={modalStyle}>
          <div className={styles.message + " " + styles[type]}>
            {props.message}
          </div>
        </div>
      </div>
    );
};

export default Modal;