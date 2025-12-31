import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./CategoryMealsPage.css";

const CategoryMealsPage = () => {
  const { name } = useParams(); // Category name from URL
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/meals/category?name=${name}`
        );
        console.log("Meals by category:", response.data);
        setMeals(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, [name]);

  return (
    <div className="category-meals-container">
      <h2>{name} Meals</h2>
      <div className="meals-grid">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h4>{meal.strMeal}</h4>
              <Link to={`/meal/${meal.idMeal}`} className="details-btn">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No meals found for this category!</p>
        )}
      </div>
    </div>
  );
};

export default CategoryMealsPage;
