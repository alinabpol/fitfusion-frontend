
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import "../styling/NutritionShow.css"

function BreakfastShow() {
  const [lunch, setLunch] = useState(null);
  const { id } = useParams();
  const URL = `https://fitfusion.herokuapp.com/api/v1/lunch/${id}`


  const getData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("get data:", data.data);
      setLunch(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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


  if (!lunch) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h2 className="recipe-titles">{lunch.title}</h2>
      <img  src={lunch.img} alt="" />
      
      {formatTextWithNewLines(lunch.ingredients)}

      <p className="description">{lunch.description}</p>
    </div>
  );
};
  
  export default BreakfastShow;
  
