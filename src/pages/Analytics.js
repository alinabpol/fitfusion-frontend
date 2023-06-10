import Popup from 'reactjs-popup';
import Card from "../components/Card"
import AnalyticsCircle from "../components/AnalyticsCircle"
import StackedHistogram from "../components/StackedHistogram";
import WeightChart from "../components/WeightChart";
import SleepChart from "../components/SleepChart";
import UpdateForm from '../components/UpdateForm';

import { useState } from 'react'
import { FaTimes } from "react-icons/fa";

import "../styling/Analytics.css"
import "../styling/Button.css"


function Analytics() {

  const [isPopupOpen ] = useState(false);
  const [goal, setGoal] = useState(5);
  const [completed, setCompleted] = useState(0);

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
                            <UpdateForm goal={goal} completed={completed} onUpdate={handleUpdate} />
                              
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
              <h2>ACTIVITY TRACKER</h2>
              <h3>Yearly</h3>
            </div>
              <StackedHistogram/>
          </Card>

          <Card>
          <div className="card1and3-header">
            <h2>WEIGHT OVER TIME</h2>
              </div>
                <WeightChart/>
          </Card>

          <Card>
          <div className="card1and3-header">
          <h2>HOURS SLEPT</h2>
          <h3>Weekly</h3>
            </div>
            <SleepChart/>
          </Card>

        </div>
      </div>
      </div>
    );
  }
  
  export default Analytics;
  