import React, { Component } from "react";
import styles from "./index.module.css";

class Select extends Component {
  
  render() {
    let addClass = "";
    if (this.props.place) {
      addClass = this.props.place;
    }
    return (
      <select
        className={styles.select + " " + styles[addClass]}
        name={this.props.name}
      >
        {/* options are to be retrieved dynamically */}
        <option value="">--{this.props.placeholder}--</option>
        <option value="1">All Receipies Categories 2</option>
        <option value="1">All Receipies Categories 3</option>
        <option value="1">All Receipies Categories 4</option>
        <option value="1">All Receipies Categories 5</option>
      </select>
    );
  }
}

export default Select;
