import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Nutrition.css"

function Smoothies() {

  const [allSmoothies, setAllSmoothies] = useState([])

  
    const getAllData = async () => {
      const response = await fetch(process.env.REACT_APP_SMOOTHIES_UR);
      const data = await response.json();
      console.log("lunch data:", data.data);
      setAllSmoothies(data.data);
    };
  
    useEffect(() => {
      getAllData();
      // eslint-disable-next-line
    }, []);



    return (
      <div className="recipes-flex-container">
        <h1> Smoothies page</h1>
        <div className="grid-container-nutrition">
        {allSmoothies ? (
          allSmoothies.map((smoothie) => (
            <div key={smoothie._id} className="recipes">

            <div className="nutr-box">
            <Link to={`/smoothies/show/${smoothie._id}`}>
              <img className="img-recipes nutr-images" src={smoothie.img} alt=""></img>
            </Link>
              <h2 className="recipe-titles">{smoothie.title}</h2>
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
  export default Smoothies;