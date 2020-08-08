import React, { useState} from 'react';
import styles from "./link.module.css";

const Table = (props) => {
    return (
      <table className="table table-striped">
        <thead>
          {props.thead}
        </thead>
        <tbody>{props.tbody}</tbody>
      </table>
    );
};

export default Table;