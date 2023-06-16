
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import "../styling/NutritionShow.css"

function BreakfastShow() {
  const [breakfast, setBreakfast] = useState(null);
  const { id } = useParams();
  
  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BREAKFAST_URL}${id}`);
      const data = await response.json();
      console.log("getBreakfast data:", data.data);
      setBreakfast(data.data);
    } catch (error) {
      console.error('Error fetching workout:', error);
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


  if (!breakfast) {
    return <h1>Loading...</h1>;
  }

  
  return (
    <div className="nutrition-show-page">
        <div className="image-container">
          <img className="nutrition-show-images" src={breakfast.img} alt="" />
      <div className="container">
          <div className="image-text">
        <h1 className="recipe-titles-show">{breakfast.title}</h1>
            {formatTextWithNewLines(breakfast.ingredients)}
            <br/>
            <p className="description">{breakfast.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default BreakfastShow;
  

