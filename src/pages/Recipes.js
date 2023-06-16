import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Nutrition.css"

function Recipes() {
  const [allrecipes, setAllRecipes] = useState([])
  
  
    const getAllData = async () => {
      const response = await fetch(process.env.REACT_APP_CUSTOM_URL);
      const data = await response.json();
      console.log("getAllData data:", data.data);
      setAllRecipes(data.data);
    };
  
    useEffect(() => {
        getAllData();
      // eslint-disable-next-line
    }, []);



    return (
      <div className="recipes-flex-container">
        <h1> Breakfast page</h1>
        <div className="grid-container-nutrition">
        {allrecipes ? (
          allrecipes.map((recipe) => (
            <div key={recipe._id} className="recipes">

            <div className="nutr-box">
            <Link to={`/recipes/show/${recipe._id}`}>
              <img className="img-recipes nutr-images" src={recipe.file} alt=""></img>
            </Link>
              <h2 className="recipe-titles">{recipe.title}</h2>
          </div>
          </div>

          ))
          ):(
            <h1>Loading...</h1>
            )}

      </div>

      </div>
    );
  }
  
  export default Recipes;
  