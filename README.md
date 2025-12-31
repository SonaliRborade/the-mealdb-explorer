🍽️ TheMealDB Explorer

A full-stack application built with Spring Boot (Backend) + React (Frontend)
that uses TheMealDB API to search recipes, explore categories & view meal details.

🚀 Tech Stack

Backend	- Java 17, Spring Boot, REST API

Frontend - React.js, Axios, React Router

Caching -	Caffeine Cache

Build Tools -	Maven & NPM

Hosting -	Runs locally

API Source - https://www.themealdb.com/api.php




✨ Features - 

✔ Search meals by name

✔ Browse meals by category

✔ Random meal suggestion 

✔ Detailed meal info (ingredients, instructions, YouTube video)

✔ Caching to improve performance

✔ Global exception handling

✔ Fully responsive UI



🔌 Backend (Spring Boot)

➤ Run Backend
cd explorer-backend
./mvnw spring-boot:run


Backend will start at:
http://localhost:8080


Available REST APIs

Endpoint with	Description- 
/api/meals/search?name=chicken	- Search meals by name

/api/meals/categories	- Get list of all categories

/api/meals/category?name=Seafood	- Meals by category

/api/meals/random	- Random recipe

/api/meals/{id}	- Meal details by ID



💻 Frontend (React)

➤ Run Frontend
cd frontend
npm install
npm start


Frontend will start at:
http://localhost:3000

🖥️ Project Screenshots
🔹 Home – Search Meals -
  ![Home Page](https://github.com/user-attachments/assets/d7636512-2f94-4005-90e7-471a6df6b371)
  
🔹 Browse by Categories - 
  ![Browse by Categories](https://github.com/user-attachments/assets/b5a4bef7-1989-4f06-aaff-a97af3d5f01a)

🔹 Meals by Category - 
  ![Meals by Category](https://github.com/user-attachments/assets/6fcf7a4b-8f03-432e-9430-5c6e7364a468)

🔹 Meal Details Page - 
  ![Meal Details 1](https://github.com/user-attachments/assets/c03e5f50-3d02-4942-9563-06f080a8cfd3)
  ![Meal Details 2](https://github.com/user-attachments/assets/9dc5e027-f129-4c48-b8a0-9613a98b53a4)
  ![Meal Details 3](https://github.com/user-attachments/assets/fdd6eba6-e2da-418d-a20b-cbed3d3f1428)
  
🔹 Random Meal - 
  ![Random Meal 1](https://github.com/user-attachments/assets/d27cfbff-900b-42de-99c3-9b8aa9a04656)
  ![Random Meal 2](https://github.com/user-attachments/assets/73fc060c-444e-4f7a-9fbe-dd4491ebf859)
  ![Random Meal 3](https://github.com/user-attachments/assets/57724fa5-51ab-4708-a55c-6ab10c594239)
  ![Random Meal 4](https://github.com/user-attachments/assets/68651314-7c8b-4d66-9388-309281a8ada6)
  

🏗️ Project Structure - 

the-mealdb-explorer
 ├─ src  (Backend code: Spring Boot)
 ├─ frontend  (React UI)
 ├─ pom.xml
 ├─ mvnw / mvnw.cmd
 └─ README.md

👩‍💻 Developer
Sonali Borade
BE(PCCOER) – Computer Engineering(2025-Batch)
SDE Intern at Ness Digital Engineering

⭐ Thank you for reviewing this project!
