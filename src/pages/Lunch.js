import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Nutrition.css"

function Lunch() {

  const [allLunch, setAllLunch] = useState([])

  const URL = "https://fitfusion.herokuapp.com/api/v1/lunch/"
  
  
    const getAllLunch = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("lunch data:", data.data);
      setAllLunch(data.data);
    };
  
    useEffect(() => {
      getAllLunch();
      // eslint-disable-next-line
    }, []);



    return (
      <div className="recipes-flex-container">
        <h1> Lunch page</h1>
        <div className="grid-container-nutrition">
        {allLunch ? (
          allLunch.map((lunch) => (
            <div key={lunch._id} className="recipes">

            <div className="nutr-box">
            <Link to={`/lunch/show/${lunch._id}`}>
              <img className="img-recipes nutr-images" src={lunch.img} alt=""></img>
            </Link>
              <h2 className="recipe-titles">{lunch.title}</h2>
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
  export default Lunch;
  