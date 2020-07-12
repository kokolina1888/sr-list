import React from 'react';
import './app.module.css';
import Header from './components/header/header';
import Banner from './components/banner';
import LatestRecipes from './components/latestRecipes';
import Footer from './components/footer';

function App() {
  return (
    <div className={StyleSheet.app}>
      <Header />     
      <Banner/>
      <LatestRecipes/>
      <Footer/>
    </div>
  );
}

export default App;
