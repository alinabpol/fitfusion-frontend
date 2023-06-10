import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Nutrition.css"

function Desserts() {

  const [allDesserts, setAlDesserts] = useState([])

  const URL = "https://fitfusion.herokuapp.com/api/v1/desserts/"
  
  
    const getAllData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("lunch data:", data.data);
      setAlDesserts(data.data);
    };
  
    useEffect(() => {
      getAllData();
      // eslint-disable-next-line
    }, []);



    return (
      <div className="recipes-flex-container">
        <h1> Desserts page</h1>
        <div className="grid-container-nutrition">
        {allDesserts ? (
          allDesserts.map((dessert) => (
            <div key={dessert._id} className="recipes">

            <div className="nutr-box">
            <Link to={`/desserts/show/${dessert._id}`}>
              <img className="img-recipes nutr-images" src={dessert.img} alt=""></img>
            </Link>
              <h2 className="recipe-titles">{dessert.title}</h2>
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
  export default Desserts;
  