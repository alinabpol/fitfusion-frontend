function AnalyticsForm() {
    return (
      <div className="analytics-form-container">
        <h1> Analytics Form page</h1>
        <form>
        <input type="text" name="activity" placeholder="activity"></input>
        <input type="number" name="length" placeholder="length"></input>
        <input type="text" name="workouts-per-week" placeholder="goal per week"></input>
        <input type="submit" name="submit"></input>
      
        </form>
      </div>
    );
  }
  
  export default AnalyticsForm;
  