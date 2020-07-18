import React from 'react';
import UserLayout from '../../components/layouts/userLayout'
import Banner from '../../components/banner'
import Recipes from "../../components/recipes";

const HomePage = () => {
    return (
      <UserLayout>
        <Banner type="home" />
        <Recipes title="Latest Recipes" />
      </UserLayout>
    );
};

export default HomePage;