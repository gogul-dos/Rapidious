// src/pages/RecipePage.js

import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "../components/RecipeDetail";

const RecipePage = () => {
  const { id } = useParams();

  return (
    <div className="recipe-page">
      <RecipeDetail recipeId={id} />
    </div>
  );
};

export default RecipePage;
