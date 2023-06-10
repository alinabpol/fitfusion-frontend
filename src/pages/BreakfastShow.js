
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import "../styling/NutritionShow.css"

function BreakfastShow() {
  const [breakfast, setBreakfast] = useState(null);
  const { id } = useParams();
  const URL = `https://fitfusion.herokuapp.com/api/v1/breakfast/${id}`


  const getData = async () => {
    try {
      const response = await fetch(URL);
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
    <div className="container">
      <h2 className="recipe-titles">{breakfast.title}</h2>
      <img  src={breakfast.img} alt="" />
      
      {formatTextWithNewLines(breakfast.ingredients)}

      <p className="description">{breakfast.description}</p>
    </div>
  );
};
  
  export default BreakfastShow;
  

