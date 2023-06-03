import "../styling/Nutrition.css"

function Nutrition() {
    return (
      <div className="nutrition-container">
        <h1> Nutrition page</h1>

        <div className="grid-container-nutrition">
          <div>
          <h1>Breakfast</h1>
          <img src="https://fitfusion.s3.us-west-1.amazonaws.com/breakfast.png" alt=""></img>
          </div>
          <div>
          <h1>Lunch</h1>
          <img src="https://fitfusion.s3.us-west-1.amazonaws.com/lunch1.png" alt=""></img>
          </div>
          <div>
          <h1>Dinner</h1>
          <img src="https://fitfusion.s3.us-west-1.amazonaws.com/dinner1.png" alt=""></img>
          </div>
          <div>
          <h1>Smoothies</h1>
          <img src="https://fitfusion.s3.us-west-1.amazonaws.com/smoothies.png" alt=""></img>
          </div>
          <div>
          <h1>Desserts</h1>
          <img src="https://fitfusion.s3.us-west-1.amazonaws.com/desserts.png" alt=""></img>
          </div>
          <div>
          <h1>Snacks</h1>
          <img src="https://fitfusion.s3.us-west-1.amazonaws.com/snacks.png" alt=""></img>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Nutrition
  