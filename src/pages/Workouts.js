import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "../styling/Workouts.css"


const  Workouts = () => {

const [workouts, setWorkouts] = useState([])

// const URL_WORKOUTS = "http://localhost:8000/api/v1/workout/"
const URL_WORKOUTS = "https://fitfusion.herokuapp.com/api/v1/workout/"


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
            <img className="header-image" src="https://fitfusion.s3.us-west-1.amazonaws.com/mountains_large.jpg" alt=""></img>
      <h1 className="top-header1">Find a <span className="red-span">Workout</span> to Elevate Your Mood and Well-being <span className="red-span">Today!</span> </h1>
      <h2 className="top-header2">Discover a collection of workout videos with trainer Sami
        achieve your goals and enhance your daily routines.</h2>
        <h1 className="header">Every Rep Counts. Make It Worth It.</h1>
      <div className="workouts-container">
        {workouts ? (
          workouts.map((workout) => (
            <div key={workout._id} className="workouts">
              <iframe
                    width="453"
                    height="280" 
                    src={workout.link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
              />
            <Link to={`/workout/show/${workout._id}`}>
              <h2 className="workout-titles">{workout.activity} | {workout.calories} cal | {workout.time}</h2>
            </Link>
          </div>
          ))
          ):(
            <h1>Loading...</h1>
            )}

      </div>
 
      </div>
    );
  }
  
  export default Workouts;
  