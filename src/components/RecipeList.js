// src/components/RecipeList.js

import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>
            <strong>Cuisine:</strong> {recipe.cuisine}
          </p>
          <p>
            <strong>Preparation Time:</strong> {recipe.preparation_time} mins
          </p>
          <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
