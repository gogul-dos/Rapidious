// src/components/Filters.js

import React, { useState, useEffect } from "react";

const Filters = ({ onFilter }) => {
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [prepTime, setPrepTime] = useState("");

  useEffect(() => {
    // Ideally, fetch filter options from the backend.
    // For demonstration, defining statically here.
    setCuisines([
      "Italian",
      "Chinese",
      "Mexican",
      "Indian",
      "French",
      "American",
      "Thai",
    ]);
    setIngredients([
      "Chicken",
      "Beef",
      "Vegetarian",
      "Pasta",
      "Rice",
      "Fish",
      "Tofu",
    ]);
  }, []);

  const handleFilterChange = () => {
    onFilter({
      cuisine: selectedCuisine,
      ingredients: selectedIngredients,
      prep_time: prepTime,
    });
  };

  return (
    <div className="filters">
      <div>
        <label>Cuisine:</label>
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          <option value="">All</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Ingredients:</label>
        <select
          multiple
          value={selectedIngredients}
          onChange={(e) => {
            const options = e.target.options;
            const selected = [];
            for (let i = 0; i < options.length; i++) {
              if (options[i].selected) {
                selected.push(options[i].value);
              }
            }
            setSelectedIngredients(selected);
          }}
        >
          {ingredients.map((ingredient) => (
            <option key={ingredient} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Preparation Time (mins):</label>
        <input
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          placeholder="e.g., 30"
        />
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filters;
