// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>EpiRecipes Search Platform</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 EpiRecipes</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
