import Popup from 'reactjs-popup';
import Card from "../components/Card"
import AnalyticsCircle from "../components/AnalyticsCircle"
import StackedBars from "../components/StackedBars";
import WeightChart from "../components/WeightChart";
import SleepChart from "../components/SleepChart";
import UpdateForm from '../components/UpdateForm';

import { useState } from 'react'
import { FaTimes } from "react-icons/fa";

import "../styling/Analytics.css"
import "../styling/Button.css"


function Analytics() {

  // constant for WeightChart
  const [weightData, setWeightData] = useState([
    { x: 'Jan', y: 0 },
    { x: 'Feb', y: 0 },
    { x: 'Mar', y: 0 },
    { x: 'Apr', y: 0 },
    { x: 'May', y: 0 },
    { x: 'Jun', y: 0 },
    { x: 'Jul', y: 0 },
    { x: 'Aug', y: 0 },
    { x: 'Sept', y: 0 },
    { x: 'Oct', y: 0 },
    { x: 'Nov', y: 0 },
    { x: 'Dec', y: 0 },
   
  ])

  // constant for SleepChart
  const [sleepData, setSleepData] = useState([
      { day: 'Mon', hours: 0 },
      { day: 'Tue', hours: 0 },
      { day: 'Wed', hours: 0 },
      { day: 'Thur', hours: 0 },
      { day: 'Fri', hours: 0 },
      { day: 'Sat', hours: 0 },
      { day: 'Sun', hours: 0 }
    ])


    
  // constants for AnalyticsCircle
  const [goal, setGoal] = useState(5);
  const [completed, setCompleted] = useState(0);
  
  
  // constant for StackedBars
    
  const [isPopupOpen ] = useState(false);

  const handleUpdate = (goalUpdated, completedUpdated) => {
    setGoal(goalUpdated);
    setCompleted(completedUpdated);
  };

  
    return (
      <div className={`analytics-container ${isPopupOpen ? 'popup-open' : ''}`}>
        <h1> Analytics page</h1>
       
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
                            <div className="popup-flex-container">
                              <UpdateForm 
                                goal={goal} 
                                completed={completed} 
                                onUpdate={handleUpdate} 
                                weightData={weightData}
                                setWeightData={setWeightData} 
                                sleepData={sleepData} 
                                setSleepData={setSleepData}
                              />         
                            </div>
                          </div>
                  )}
               </Popup>
                <button className="button-styled">Check Your BMI</button>
            </div >
          </div >
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
              <StackedBars/>
          </Card>

          <Card>
          <div className="card1and3-header">
            <h2>WEIGHT OVER TIME</h2>
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
  