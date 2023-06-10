
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import "../styling/NutritionShow.css"

function DinnerShow() {
  const [dinner, setDinner] = useState(null);
  const { id } = useParams();
  const URL = `https://fitfusion.herokuapp.com/api/v1/lunch/${id}`


  const getData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("get data:", data.data);
      setDinner(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
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


  if (!dinner) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h2 className="recipe-titles">{dinner.title}</h2>
      <img  src={dinner.img} alt="" />
      
      {formatTextWithNewLines(dinner.ingredients)}

      <p className="description">{dinner.description}</p>
    </div>
  );
};
  
  export default DinnerShow;
  