import { useState } from 'react';

function UpdateForm({ goal, completed, onUpdate }) {
  const [goalUpdated, setGoalUpdated] = useState(goal);
  const [completedUpdated, setCompletedUpdated] = useState(completed);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(parseInt(goalUpdated), parseInt(completedUpdated));
  };
  return (
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
  );
}

export default UpdateForm;