
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



function WorkoutsShow() {
  const [workout, setWorkout] = useState(null);
  const { id } = useParams();
  const URL_WORKOUT = `https://fitfusion.herokuapp.com/api/v1/workout/${id}`

  const getWorkout = async () => {
    try {
      const response = await fetch(URL_WORKOUT);
      const data = await response.json();
      console.log("getWorkout data:", data.data);
      setWorkout(data.data);
    } catch (error) {
      console.error('Error fetching workout:', error);
    }
  };

  useEffect(() => {
    getWorkout();
  }, [id]);

  if (!workout) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
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
  


  