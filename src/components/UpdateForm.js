import { useState } from 'react';

function UpdateForm({ goal, completed, onUpdate }) {
  const [newGoal, setNewGoal] = useState(goal);
  const [newCompleted, setNewCompleted] = useState(completed);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(newGoal, newCompleted);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Weekly Goal:
        <input
          type="number"
          value={newGoal}
          onChange={(event) => setNewGoal(parseInt(event.target.value, 10))}
        />
      </label>
      <label>
        Workouts Completed:
        <input
          type="number"
          value={newCompleted}
          onChange={(event) => setNewCompleted(parseInt(event.target.value, 10))}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateForm;