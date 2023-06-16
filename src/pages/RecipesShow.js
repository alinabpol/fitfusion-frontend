import { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';

import UpdateRecipeForm from '../components/UpdateRecipeForm';
import Popup from 'reactjs-popup';


import "../styling/NutritionShow.css"

function RecipesShow() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  let navigate = useNavigate()


  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_CUSTOM_URL}${id}`);
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



  const handleDelete = async () => {
    try {

      const response = await fetch(`${process.env.REACT_APP_CUSTOM_URL}${id}`, {
        method: 'DELETE',
      });
  
  
      if (response.ok) {
        navigate('/recipes');
        console.log('Recipe deleted successfully');
      } else {
        console.error('Failed to delete recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!recipe) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="nutrition-show-page">
      <div className="custom-recipe-btns">
      <Popup trigger={
                  <div>
            <button className="button-styled edit-btn">EDIT</button>
            </div>
             }modal nested>
             {close => (
               <div className='popup-window nutrition-popup'>
                 <button className="close" tabIndex="0" onClick=
                   {() => close()}>
                        <FaTimes />
                 </button>
                 <div className="popup-container">
                   </div>
                    <div>
                      <UpdateRecipeForm/>
                    </div>
                  </div>
                  )}
            </Popup>
        
        <button className="button-styled delete-btn" onClick={handleDelete} >DELETE</button>
        </div>
        <div className="image-container">
          <img className="nutrition-show-images" src={recipe.file} alt="" />
      <div className="container">
          <div className="image-text">
        <h1 className="recipe-titles-show">{recipe.title}</h1>
            {formatTextWithNewLines(recipe.ingredients)}
            <br/>
            <p className="description">{recipe.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  
  export default RecipesShow;
  

