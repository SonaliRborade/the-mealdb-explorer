import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryMealsPage from "./pages/CategoryMealsPage";
import RandomMealPage from "./pages/RandomMealPage";
import MealDetailsPage from "./pages/MealDetailsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:name" element={<CategoryMealsPage />} />
          <Route path="/random" element={<RandomMealPage />} />
          <Route path="/meal/:id" element={<MealDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
