import { useState } from 'react';

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
    onUpdate(parseInt(goalUpdated), parseInt(completedUpdated));
  };

  const handleWeightSubmit = (event) => {
    event.preventDefault();
    console.log(weightData)
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
  };



const handleSleepSubmit = (event) => {
  event.preventDefault();
  console.log("sleepdata in form:",sleepData)
  const updatedSleepData = sleepData.map((i) => {
    if (i.day === sleepChartDay) {
      return { day: i.day, hours: sleepValue };
    } else {
      console.log(i)
      return i;
    }
  });

  setSleepData(updatedSleepData);
  setSleepChartDay('');
  setSleepValue('');
};

const handleActivitySubmit = (event) => {
  event.preventDefault();
  console.log("activity data in form:",sleepData)
  const updateActivityData = activityData.map((i) => {
    if (i.x === activityChartX) {
      return { x: i.x, y: activityChartY };
    } else {
      console.log(i)
      return i;
    }
  });

  setActivityData(updateActivityData);
  setActivityChartX('');
  setActivityChartY('');
};

  return (
    <div>
      {/* Form for AnalyticsCircle */}
      <form onSubmit={handleSubmit}>
        <label>
          Weekly Goal:
          <input
            type="number"
            value={goalUpdated}
            onChange={(event) => setGoalUpdated(parseInt(event.target.value, 10))}
          />
        </label>
        <label>
          Workouts Completed:
          <input
            type="number"
            value={completedUpdated}
            onChange={(event) => setCompletedUpdated(parseInt(event.target.value, 10))}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Form for WeightChart */}
      <form onSubmit={handleWeightSubmit}>
        <label>
          Month:
          <select value={weightMonth} onChange={(event) => setWeightMonth(event.target.value)}>
            <option value="">Month</option>
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
        </label>
        <label>
          Weight:
          <input
            type="number"
            value={weightValue}
            onChange={(event) => setWeightValue(parseInt(event.target.value, 10))}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Form for SleepChart */}
      <form onSubmit={handleSleepSubmit}>
        <label>
          Day:
          <select value={sleepChartDay} onChange={(event) => setSleepChartDay(event.target.value)}>
            <option value="">Day</option>
            <option value="Mon">Mon</option>
            <option value="Tue">Tue</option>
            <option value="Wed">Wed</option>
            <option value="Thu">Thur</option>
            <option value="Fri">Fri</option>
            <option value="Sat">Sat</option>
            <option value="Sun">Sun</option>
          </select>
        </label>
        <label>
          Hours of Sleep:
          <input
            type="number"
            value={sleepValue}
            onChange={(event) => setSleepValue(parseInt(event.target.value, 10))}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Form for StackedBars */}
      <form onSubmit={handleActivitySubmit}>
        <label>
          Day:
          <select value={activityChartX} onChange={(event) => setActivityChartX(event.target.value)}>
            <option value="">Activity</option>
            <option value="Running">Running</option>
            <option value="Walking">Walking</option>
            <option value="Swimming">Swimming</option>
            <option value="Gym">Gym</option>
            <option value="Cancelled Workout">Cancelled Workout</option>
            <option value="Stretching">Stretching</option>
            <option value="Boxing">Boxing</option>
          </select>
        </label>
        <label>
          Qty:
          <input
            type="number"
            value={activityChartY}
            onChange={(event) => setActivityChartY(parseInt(event.target.value, 10))}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateForm;
