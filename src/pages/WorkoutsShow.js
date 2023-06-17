
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



function WorkoutsShow() {
  const [workout, setWorkout] = useState(null);
  const { id } = useParams();


  const getWorkout = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_WORKOUTS_URL}${id}`);
      const data = await response.json();
      console.log("getWorkout data:", data.data);
      setWorkout(data.data);
    } catch (error) {
      console.error('Error fetching workout:', error);
    }
  };

  useEffect(() => {
    getWorkout();
       // eslint-disable-next-line
  }, [id]);

  if (!workout) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="workout-show-container">
      <h1>{workout.activity}</h1>
      <p>Calories: {workout.calories}</p>
      <p>Time: {workout.time}</p>
      <iframe
        width="760"
        height="515"
        src={workout.link}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
  
  export default WorkoutsShow;
  


  