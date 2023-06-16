import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Nutrition.css"

function Snacks() {

  const [allSnacks, setAllSnacks] = useState([])
  
  
    const getAllData = async () => {
      const response = await fetch(process.env.REACT_APP_SNACKS_URL);
      const data = await response.json();
      console.log("lunch data:", data.data);
      setAllSnacks(data.data);
    };
  
    useEffect(() => {
      getAllData();
      // eslint-disable-next-line
    }, []);



    return (
      <div className="recipes-flex-container">
        <h1> Snacks page</h1>
        <div className="grid-container-nutrition">
        {allSnacks ? (
          allSnacks.map((snacks) => (
            <div key={snacks._id} className="recipes">

            <div className="nutr-box">
            <Link to={`/snacks/show/${snacks._id}`}>
              <img className="img-recipes nutr-images" src={snacks.img} alt=""></img>
            </Link>
              <h2 className="recipe-titles">{snacks.title}</h2>
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
  export default Snacks;