import Popup from 'reactjs-popup';
import Card from "../components/Card"
import AnalyticsCircle from "../components/AnalyticsCircle"
import StackedHistogram from "../components/StackedHistogram";
import WeightChart from "../components/WeightChart";
import SleepChart from "../components/SleepChart";

import { useState } from 'react'
import { FaTimes } from "react-icons/fa";

import "../styling/Analytics.css"
import "../styling/Button.css"


function Analytics() {

  const [isPopupOpen ] = useState(false);
  
    return (
      <div className={`analytics-container ${isPopupOpen ? 'popup-open' : ''}`}>
        <h1> Analytics page</h1>
        <div className="btns">
        <Popup trigger={
                <div >
                  <button className="button-styled">Update Your Stats</button>
                </div>

              }modal nested>
                {close => (
                          <div className='popup-window'>
                            <button className="close" tabindex="0" onClick=
                              {() => close()}>
                                   <FaTimes />
                            </button>
                              <h4 className="popup-header">popup content</h4>
                                <div>
                                  
                                </div>
                          </div>
                )}
          </Popup>
        <button className="button-styled">Check Your BMI</button>
        </div >

        <div className="flex-container">
        <div className="grid-container">

          <Card>
            <div className="card1&3-header">
              <h2>GOAL PROGRESS CHART</h2>
              <h3>Weekly</h3>
            </div>
              <AnalyticsCircle/>
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
  