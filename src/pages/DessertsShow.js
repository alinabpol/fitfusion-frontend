import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import "../styling/NutritionShow.css"

function DessertsShow() {
  const [dessert, setDessert] = useState(null);
  const { id } = useParams();
  const URL = `https://fitfusion.herokuapp.com/api/v1/desserts/${id}`


  const getData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("get data:", data.data);
      setDessert(data.data);
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


  if (!dessert) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h2 className="recipe-titles">{dessert.title}</h2>
      <img  src={dessert.img} alt="" />
      
      {formatTextWithNewLines(dessert.ingredients)}

      <p className="description">{dessert.description}</p>
    </div>
  );
};
  
  export default DessertsShow;
  