import React from 'react';
import './app.module.css';
import Header from './header/header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";



function App() {
  return (
    <div className={StyleSheet.app}>
      <Header />
      <FontAwesomeIcon icon={faCoffee} />;
    </div>
  );
}

export default App;
