import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoriesPage.css';
import { useNavigate } from 'react-router-dom';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/meals/categories');
      setCategories(response.data.categories || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  fetchCategories();
}, []);

  return (
    <div className="categories-container">
      <h2>Meal Categories</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div
            key={cat.idCategory}
            className="category-card"
            onClick={() => navigate(`/category/${cat.strCategory}`)}
          >
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <h3>{cat.strCategory}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
