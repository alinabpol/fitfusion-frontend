import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Nutrition.css"

function Dinner() {
  const [allDinner, setAllDinner] = useState([])

  const URL = "https://fitfusion.herokuapp.com/api/v1/dinner/"
  
  
    const getAllDinner = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("lunch data:", data.data);
      setAllDinner(data.data);
    };
  
    useEffect(() => {
      getAllDinner();
      // eslint-disable-next-line
    }, []);



    return (
      <div className="recipes-flex-container">
        <h1> Dinner page</h1>
        <div className="grid-container-nutrition">
        {allDinner ? (
          allDinner.map((dinner) => (
            <div key={dinner._id} className="recipes">

            <div className="nutr-box">
            <Link to={`/dinner/show/${dinner._id}`}>
              <img className="img-recipes nutr-images" src={dinner.img} alt=""></img>
            </Link>
              <h2 className="recipe-titles">{dinner.title}</h2>
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
  export default Dinner;
  