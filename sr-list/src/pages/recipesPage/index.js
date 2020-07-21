import React from 'react';
import UserLayout from "../../components/layouts/userLayout";
import Banner from '../../components/banner'
import RecipesList from '../../components/recipesList'


const RecipesPage = (props) => {
    return (
      <UserLayout>
        <Banner type="recipes" />
        <RecipesList page={props.match.params.page} />
      </UserLayout>
    );
};

export default RecipesPage;