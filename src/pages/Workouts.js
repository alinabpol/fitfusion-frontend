import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      <div className="workouts-container">
        <h1> WORKOUTS </h1>
        {workouts ? (
          workouts.map((workout) => (
            <div key={workout.id} className="workouts">
            <Link to={`/workout/show/${workout.id}`}>
              <h2>{workout.activity}</h2>
            </Link>
              <iframe
                    width="853"
                    height="480" 
                    src={workout.link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
              />
            <h2>{workout.calories}</h2>
            <h2>{workout.time}</h2>
          </div>
          ))
          ):(
            <h1>Loading...</h1>
        )}

      </div>
    );
  }
  
  export default Workouts;
  