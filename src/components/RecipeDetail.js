// src/components/RecipeDetail.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const RecipeDetail = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/recipes/${recipeId}`
        );
        setRecipe(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch recipe.");
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p>
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
      <p>
        <strong>Preparation Time:</strong> {recipe.preparation_time} mins
      </p>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.split(",").map((ing, index) => (
          <li key={index}>{ing.trim()}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
