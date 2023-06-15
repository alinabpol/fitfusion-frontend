import Popup from 'reactjs-popup';
import Card from "../components/Card"
import AnalyticsCircle from "../components/AnalyticsCircle"
import StackedBars from "../components/StackedBars";
import WeightChart from "../components/WeightChart";
import SleepChart from "../components/SleepChart";
import UpdateForm from '../components/UpdateForm';
import BMI from '../components/BMI';

import { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa";

import "../styling/Analytics.css"
import "../styling/Button.css"
import "../styling/UpdateForm.css"



function Analytics() {

  // constant for WeightChart
  const [weightData, setWeightData] = useState(JSON.parse(localStorage.getItem('weightData')) || [
    { x: 'Jan', y: 150 },
    { x: 'Feb', y: 140 },
    { x: 'Mar', y: 140 },
    { x: 'Apr', y: 142 },
    { x: 'May', y: 0 },
    { x: 'Jun', y: 0 },
    { x: 'Jul', y: 0 },
    { x: 'Aug', y: 0 },
    { x: 'Sept', y: 0 },
    { x: 'Oct', y: 0 },
    { x: 'Nov', y: 0 },
    { x: 'Dec', y: 0 },
  ]);

  // constant for SleepChart
  const [sleepData, setSleepData] = useState(JSON.parse(localStorage.getItem('sleepData')) || [
    { day: 'Mon', hours: 6 },
    { day: 'Tue', hours: 6 },
    { day: 'Wed', hours: 9 },
    { day: 'Thur', hours: 7 },
    { day: 'Fri', hours: 5 },
    { day: 'Sat', hours: 0 },
    { day: 'Sun', hours: 0 },
  ]);


  // constants for AnalyticsCircle
  const [goal, setGoal] = useState(JSON.parse(localStorage.getItem('goal')) || 5);
  const [completed, setCompleted] = useState(JSON.parse(localStorage.getItem('completed')) || 2);
  
  
  // constant for StackedBars
  const [activityData, setActivityData] = useState(JSON.parse(localStorage.getItem('activityData')) || [
    { x: "Running", y: 17 },
    { x: "Walking", y: 20 },
    { x: "Swimming", y: 15 },
    { x: "Gym", y: 10 },
    { x: "Cancelled Workout", y: 8 },
    { x: "Yoga", y: 7 },
    { x: "Stretching", y: 13 },
    { x: "Boxing", y: 12 },
  ]);
    
  const [isPopupOpen ] = useState(false);

  const handleUpdate = (goalUpdated, completedUpdated) => {
    setGoal(goalUpdated);
    setCompleted(completedUpdated);

    // Save the updated data to localStorage
    localStorage.setItem('goal', JSON.stringify(goalUpdated));
    localStorage.setItem('completed', JSON.stringify(completedUpdated));
  };

  useEffect(() => {
    localStorage.setItem('weightData', JSON.stringify(weightData));
    localStorage.setItem('sleepData', JSON.stringify(sleepData));
    localStorage.setItem('activityData', JSON.stringify(activityData));
  }, [weightData, sleepData, activityData]);


    return (
      
      <div className={`analytics-container ${isPopupOpen ? 'popup-open' : ''}`}>
       
        <div className="parent-analytics-btns-flex">
          <div className="analytics-btns-flex">
            
            <div className="btns-container">
                <Popup trigger={
                  <div>
                    <button className="button-styled">Update Your Stats</button>
                  </div>

                    }modal nested>
                        {close => (
                          <div className='popup-window'>
                            <button className="close" tabIndex="0" onClick=
                              {() => close()}>
                                   <FaTimes />
                            </button>
                            <div className="popup-container">
                              <h2 className="popup-header">Use the forms below to update your stats:</h2>
                              <UpdateForm 
                                goal={goal} 
                                completed={completed} 
                                onUpdate={handleUpdate} 
                                weightData={weightData}
                                setWeightData={setWeightData} 
                                sleepData={sleepData} 
                                setSleepData={setSleepData}
                                activityData={activityData}
                                setActivityData={setActivityData}
                              />         
                            </div>
                    
                          </div>
                  )}
               </Popup>

                <Popup trigger={
                  <div>
                    <button className="button-styled">Check your BMI</button>
                  </div>
                    }modal nested>
                    {close => (
                      <div className='popup-window popup-bmi'>
                        <button className="close" tabIndex="0" onClick=
                          {() => close()}>
                               <FaTimes />
                        </button>
                        <div className="popup-container">
                          <BMI      
                          />         
                        </div>
                      </div>
              )}
           </Popup>
            </div >
          </div >
          <h1 className="analytics-header"> Analytics</h1>
        </div >


        <div className="flex-container">
        <div className="grid-container">

          <Card>
            <div className="card1&3-header">
              <h2>GOAL PROGRESS CHART</h2>
              <h3>Weekly</h3>
            </div>
              <AnalyticsCircle goal={goal} completed={completed}/>
          </Card>
          
          <Card>
            <div className="card2-header">
              <h2>TYPE OF ACTIVITY TRACKER</h2>
              <h3>Over Time</h3>
            </div>
              <StackedBars activityData={activityData} setActivityData={setActivityData}/>
          </Card>

          <Card>
          <div className="card1and3-header">
            <h2>WEIGHT OVER TIME</h2>
            <h3>Yearly</h3>
              </div>
                <WeightChart weightData={weightData} setWeightData={setWeightData}/>
          </Card>

          <Card>
          <div className="card1and3-header">
          <h2>HOURS SLEPT</h2>
          <h3>Weekly</h3>
            </div>
            <SleepChart sleepData={sleepData} setsleepData={setSleepData}/>
          </Card>

        </div>
      </div>
      </div>
    );
  }
  
  export default Analytics;
  