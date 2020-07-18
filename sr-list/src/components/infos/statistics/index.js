import React from 'react';
import StatisticsCard from '../statisticsCard';
import styles from "./index.module.css";

const Statistics = () => {
    return (
      <div className={styles.container + " row"}>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard type="total" title="Total" count="2326"/>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard type="snacks" title="Snacks" count="521"/>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard type="rib" title="Meal" count="725"/>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard type="pancake" title="Desserts" count="853"/>
        </div>        
      </div>
    );
};

export default Statistics;