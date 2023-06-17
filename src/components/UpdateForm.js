import { useState } from 'react';

import "../styling/UpdateForm.css"
import "../styling/Button.css"


function UpdateForm({ goal, completed, onUpdate, weightData, setWeightData, sleepData, setSleepData, activityData, setActivityData }) {
  
  // constants for AnalyticsCircle chart
  const [goalUpdated, setGoalUpdated] = useState(goal);
  const [completedUpdated, setCompletedUpdated] = useState(completed);

  // constants for WeightChart
  const [weightMonth, setWeightMonth] = useState('');
  const [weightValue, setWeightValue] = useState('');

  // constants for SleepChart
  const [sleepChartDay, setSleepChartDay] = useState('');
  const [sleepValue, setSleepValue] = useState('');

  // constants for Stackedbars
  const [activityChartX, setActivityChartX] = useState('');
  const [activityChartY, setActivityChartY] = useState('');


const handleSubmit = (event) => {
  event.preventDefault();

  if (goalUpdated !== undefined && completedUpdated !== undefined) {
    onUpdate(parseInt(goalUpdated), parseInt(completedUpdated));
  }

  if (weightMonth !== '' && weightValue !== '') {
    const updatedWeightData = weightData.map((i) => {
      if (i.x === weightMonth) {
        return { x: i.x, y: weightValue };
      } else {
        return i;
      }
    });
    setWeightData(updatedWeightData);
    setWeightMonth('');
    setWeightValue('');
  }

  if (sleepChartDay !== '' && sleepValue !== '') {
    const updatedSleepData = sleepData.map((i) => {
      if (i.day === sleepChartDay) {
        return { day: i.day, hours: sleepValue };
      } else {
        return i;
      }
    });
    setSleepData(updatedSleepData);
    setSleepChartDay('');
    setSleepValue('');
  }

  if (activityChartX !== '' && activityChartY !== '') {
    const updateActivityData = activityData.map((i) => {
      if (i.x === activityChartX) {
        return { x: i.x, y: activityChartY };
      } else {
        return i;
      }
    });
    setActivityData(updateActivityData);
    setActivityChartX('');
    setActivityChartY('');
  }
};


  return (

    <div className="popup-grid-container">
      {/* Form for AnalyticsCircle */}
      <form className="form-flex goal-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Goal Progress </legend><br/>
        <label>
          Weekly Goal:
          <input
            className="update-input"
            type="number"
            value={goalUpdated}
            onChange={(event) => setGoalUpdated(parseInt(event.target.value, 10))}
          />
        </label><br/><br/>
        <label>
          Workouts Completed:
          <input
            className="update-input"
            type="number"
            value={completedUpdated}
            onChange={(event) => setCompletedUpdated(parseInt(event.target.value, 10))}
          />
        </label>
        </fieldset>
        <br/>
      </form>
      


      {/* Form for StackedBars */}
      <form className="form-flex" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Activity Tracker </legend><br/>
        <label>
          <br/>
          <select value={activityChartX} onChange={(event) => setActivityChartX(event.target.value)}>
            <option value="">Select Activity</option>
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Swimming">Swimming</option>
            <option value="Gym">Gym</option>
            <option value="Cancelled Workout">Cancelled Workout</option>
            <option value="Stretching">Stretching</option>
            <option value="Boxing">Boxing</option>
          </select>
        </label><br/><br/>
        <label>
          Qty:
          <input
            className="update-input"
            type="number"
            value={activityChartY}
            onChange={(event) => setActivityChartY(parseInt(event.target.value, 10))}
          />
        </label>
        </fieldset>
        <br/>
      </form>


      {/* Form for SleepChart */}
      <form className="form-flex sleep-chart-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sleep</legend><br/>
        <label>
          <select value={sleepChartDay} onChange={(event) => setSleepChartDay(event.target.value)}>
            <option value="">Select Day</option>
            <option value="Mon">Mon</option>
            <option value="Tue">Tue</option>
            <option value="Wed">Wed</option>
            <option value="Thu">Thur</option>
            <option value="Fri">Fri</option>
            <option value="Sat">Sat</option>
            <option value="Sun">Sun</option>
          </select>
        </label><br/><br/>
        <label>
          Hours of Sleep:
          <input
            className="update-input"
            type="number"
            value={sleepValue}
            onChange={(event) => setSleepValue(parseInt(event.target.value, 10))}
          />
        </label>
        </fieldset>
        <br/>
      </form>


      {/* Form for WeightChart */}
      <form className="form-flex weight-chart-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Weight Over Time </legend><br/>
        <label>
          <select value={weightMonth} onChange={(event) => setWeightMonth(event.target.value)}>
            <option value="">Select Month</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sept">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
        </label><br/><br/>
        <label>
          Weight:
          <input
            className="update-input"
            type="number"
            value={weightValue}
            onChange={(event) => setWeightValue(parseInt(event.target.value, 10))}
          />
        </label>
        </fieldset>
        <br/>
        <button className="button-styled btn-form" type="submit">Submit</button>
      </form>
      </div>
 
  );
}

export default UpdateForm;
