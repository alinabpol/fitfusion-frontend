import { useState } from 'react';

function UpdateForm({ goal, completed, onUpdate, weightData, setWeightData }) {
  const [goalUpdated, setGoalUpdated] = useState(goal);
  const [completedUpdated, setCompletedUpdated] = useState(completed);
  const [weightMonth, setWeightMonth] = useState('');
  const [weightValue, setWeightValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(parseInt(goalUpdated), parseInt(completedUpdated));
  };

  const handleWeightSubmit = (event) => {
    event.preventDefault();
    console.log(weightData)
    const updatedWeightData = weightData.map((item) => {
      if (item.x === weightMonth) {
        return { x: item.x, y: weightValue };
      } else {
        return item;
      }
    });
    setWeightData(updatedWeightData);
    setWeightMonth('');
    setWeightValue('');
  };

  return (
    <div>
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
        <button type="submit">Update</button>
      </form>
      <form onSubmit={handleWeightSubmit}>
        <label>
          Month:
          <select value={weightMonth} onChange={(event) => setWeightMonth(event.target.value)}>
            <option value="">Select a month</option>
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
        <button type="submit">Update Weight</button>
      </form>
    </div>
  );
}

export default UpdateForm;
