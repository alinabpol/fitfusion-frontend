import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Nutrition.css"

function Breakfast() {
  const [allBreakfast, setAllBreakfast] = useState([])

  // const URL_BREAKFAST = "http://localhost:8000/api/v1/breakfast/"
  const URL_BREAKFAST = "https://fitfusion.herokuapp.com/api/v1/breakfast/"
  
  
    const getAllBreakfast = async () => {
      const response = await fetch(URL_BREAKFAST);
      const data = await response.json();
      console.log("getAllBreakfasts data:", data.data);
      setAllBreakfast(data.data);
    };
  
    useEffect(() => {
      getAllBreakfast();
      // eslint-disable-next-line
    }, []);
  
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



    return (
      <div className="recipes-flex-container">
        <h1> Breakfast page</h1>
        <div className="grid-container-recipes">
        {allBreakfast ? (
          allBreakfast.map((breakfast) => (
            <div key={breakfast._id} className="recipes">

       
            <Link to={`/breakfast/show/${breakfast._id}`}>
              <img className="img-recipes" src={breakfast.img} alt=""></img>
            </Link>
              <h2 className="recipe-titles">{breakfast.title}</h2>

            {formatTextWithNewLines(breakfast.ingredients)}

            <p style={{ whiteSpace: 'pre-line' }}>{breakfast.description}</p>
          </div>
          ))
          ):(
            <h1>Loading...</h1>
            )}

      </div>

      </div>
    );
  }
  
  export default Breakfast;
  