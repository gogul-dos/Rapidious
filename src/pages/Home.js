// src/pages/Home.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import RecipeList from "../components/RecipeList";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const size = 10; // Number of recipes per page

  useEffect(() => {
    fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, filters, page]);

  const fetchRecipes = async () => {
    try {
      const params = {
        q: query,
        page: page,
        size: size,
        ...filters,
      };

      // Handle ingredients as multiple query params
      if (filters.ingredients && filters.ingredients.length > 0) {
        params.ingredients = filters.ingredients;
      }

      const response = await axios.get("http://localhost:8000/recipes", {
        params,
      });
      setRecipes(response.data.recipes);
      setTotal(response.data.total);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const handleFilter = (filterParams) => {
    setFilters(filterParams);
    setPage(1);
  };

  const totalPages = Math.ceil(total / size);

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <Filters onFilter={handleFilter} />
      <RecipeList recipes={recipes} />
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={num === page ? "active" : ""}
            >
              {num}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
