import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RandomMealPage.css";

export default function RandomMealPage() {
  const [meal, setMeal] = useState(null);

  const fetchRandomMeal = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/meals/random");
      console.log("Random meal:", response.data);
      setMeal(response.data.meals ? response.data.meals[0] : null);
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  };

  return (
    <div className="random-container">
      <h2>Feeling Hungry?</h2>
      <button onClick={fetchRandomMeal} className="random-btn">
        Get a Random Meal 🍽️
      </button>

      {meal && (
        <div className="random-result">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>{meal.strMeal}</h3>
          <Link to={`/meal/${meal.idMeal}`} className="details-btn">
            View Details
          </Link>
        </div>
      )}
    </div>
  );
}
