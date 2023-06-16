
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import "../styling/NutritionShow.css"

function RecipesShow() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();


  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_RECIPES_URL}${id}`);
      const data = await response.json();
      console.log("getData data:", data.data);
      setRecipe(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [id]);

  const formatTextWithNewLines = (text) => {
    const lines = text.split('\n');
    return (
      <ul>
        {lines.map((line, index) => (
          <li key={index} style={{ textAlign: 'start'}}>{line}</li>
        ))}
      </ul>
    );
  };


  if (!recipe) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h2 className="recipe-titles">{recipe.title}</h2>
      <img  src={recipe.file} alt="" />
      
      {formatTextWithNewLines(recipe.ingredients)}

      <p className="description">{recipe.description}</p>
    </div>
  );
};
  
  export default RecipesShow;
  

