import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SearchPage.css";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const response = await axios.get(`http://localhost:8080/api/meals/search?name=${encodeURIComponent(query)}`);
      console.log("API Response:", response.data);
      setMeals(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  return (
    <div className="search-container">
      <h2>Search Meals</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a meal..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="meal-grid">
        {meals.map((meal) => (
          <div className="meal-card" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h4>{meal.strMeal}</h4>
            <Link to={`/meal/${meal.idMeal}`} className="details-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
