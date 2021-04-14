import React from 'react';
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RECIPES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <RecipeForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RecipeList recipes={recipes} title="Newest recipes!" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;