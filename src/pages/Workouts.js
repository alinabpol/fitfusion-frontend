import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../Workouts.css"


const  Workouts = () => {

const [workouts, setWorkouts] = useState([])

const URL_WORKOUTS = "http://localhost:8000/api/v1/workout/"


  const getAllWorkouts = async () => {
    const response = await fetch(URL_WORKOUTS);
    const data = await response.json();
    console.log("getAllWorkouts data:", data.data);
    setWorkouts(data.data);
  };

  useEffect(() => {
    getAllWorkouts();
    // eslint-disable-next-line
  }, []);


    return (
      <div className="workouts-page">
        <h1> WORKOUTS </h1>
      <div className="workouts-container">
        {workouts ? (
          workouts.map((workout) => (
            <div key={workout.id} className="workouts">
              <iframe
                    width="453"
                    height="280" 
                    src={workout.link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
              />
            <Link to={`/workout/show/${workout.id}`}>
              <h2>{workout.activity} | {workout.calories} cal | {workout.time}</h2>
            </Link>
          </div>
          ))
          ):(
            <h1>Loading...</h1>
            )}

      </div>
      <div>
            <img src="https://fitfusion.s3.us-west-1.amazonaws.com/fabian-kozdon-5ZeooCGNw3s-unsplash.jpg" alt=""></img>
            </div>
      </div>
    );
  }
  
  export default Workouts;
  