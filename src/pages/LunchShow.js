
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import "../styling/NutritionShow.css"

function BreakfastShow() {
  const [lunch, setLunch] = useState(null);
  const { id } = useParams();


  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_LUNCH_URL}${id}`);
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
    <div className="nutrition-show-page">
        <div className="image-container">
          <img className="nutrition-show-images" src={lunch.img} alt="" />
      <div className="container">
          <div className="image-text">
        <h1 className="recipe-titles-show">{lunch.title}</h1>
            {formatTextWithNewLines(lunch.ingredients)}
            <br/>
            <p className="description">{lunch.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default BreakfastShow;
  
