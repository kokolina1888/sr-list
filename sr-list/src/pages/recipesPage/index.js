import React from 'react';
import UserLayout from "../../components/layouts/userLayout";
import Banner from '../../components/banner'
import RecipesList from '../../components/recipesList'


const InfoPage = () => {
    return (
      <UserLayout>
        <Banner type="recipes" />
        <RecipesList/>
      </UserLayout>
    );
};

export default InfoPage;