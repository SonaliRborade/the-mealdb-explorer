import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MealDetailsPage.css';

const MealDetailsPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/meals/${id}`);
        console.log("Meal details:", response.data);
        setMeal(response.data.meals ? response.data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    fetchMealDetails();
  }, [id]);

  if (!meal) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading meal details...</p>;

  return (
    <div className="meal-details-container">
      <h2>{meal.strMeal}</h2>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="meal-detail-img"
      />

      <h3>Ingredients</h3>
      <ul className="ingredients-list">
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = meal[`strIngredient${i+1}`];
          const measure = meal[`strMeasure${i+1}`];

          return ingredient && ingredient.trim() !== '' ? (
            <li key={i}>{`${ingredient} → ${measure}`}</li>
          ) : null;
        })}
      </ul>

      <h3>Instructions</h3>
      <p className="instructions">{meal.strInstructions}</p>

      {meal.strYoutube && (
        <>
          <h3>Watch on YouTube</h3>
          <iframe
            width="560"
            height="315"
            src={meal.strYoutube.replace("watch?v=", "embed/")}
            title="Meal Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </>
      )}
    </div>
  );
};

export default MealDetailsPage;
