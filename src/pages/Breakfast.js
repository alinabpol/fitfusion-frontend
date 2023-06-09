import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Nutrition.css"

function Breakfast() {
  const [allBreakfast, setAllBreakfast] = useState([])

  const URL_BREAKFAST = process.env.REACT_APP_BREAKFAST_URL
  
  
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



    return (
      <div className="recipes-flex-container">
        <h1 className="nutrition-headers"> Breakfast</h1>
        <div className="grid-container-nutrition">
        {allBreakfast ? (
          allBreakfast.map((breakfast) => (
            <div key={breakfast._id} className="recipes">

            <div className="nutr-box">
            <Link to={`/breakfast/show/${breakfast._id}`}>
              <img className="img-recipes nutr-images" src={breakfast.img} alt=""></img>
            </Link>
              <h2 className="recipe-titles">{breakfast.title}</h2>
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
  
  export default Breakfast;
  