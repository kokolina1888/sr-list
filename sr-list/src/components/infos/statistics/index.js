import React, { useEffect, useState } from 'react';
import StatisticsCard from '../statisticsCard';
import {firebaseLooper} from '../../../shared'
import styles from "./index.module.css";
import { firebaseRecipes } from '../../../firebase';

const Statistics = () => {
  const [data, setTotal ] = useState({
    total: 0,
    salads: 0,
    meal: 0,
    dessert: 0
  })
  useEffect(() => {
    
    firebaseRecipes      
      .once("value")
      .then((snapshot) => {
        let fetchedRecipes = firebaseLooper(snapshot);
        setTotal({
        total: fetchedRecipes.length,
        salads: 10, 
        meals: 251,
        desserts: 100
      }
        );
      })
      .catch((err) => {
      });
  }, [data])


 
    return (
      <div className={styles.container + " row"}>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard type="total" title="Total" count={data.total}/>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard type="snacks" title="Salads" count={data.salads}/>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard type="rib" title="Meal" count={data.meals}/>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatisticsCard type="pancake" title="Desserts" count={data.desserts}/>
        </div>        
      </div>
    );
};

export default Statistics;