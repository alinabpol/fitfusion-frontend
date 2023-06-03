import "../styling/Nutrition.css"

function Nutrition() {
    return (
      <div className="nutrition-container">
        <div className="nutr-img-container">
          <img className="header-image-nutrition" src="https://fitfusion.s3.us-west-1.amazonaws.com/nutr-header.png" alt=""></img>
            <h1 className="top-nutrition-header">Savor the Goodness: Discover a World of Flavorful and Healthy Recipes </h1>
              <h2 className="bottom-nutrition-header">We've curated a diverse collection of culinary delights to cater to all your 
              mealtime cravings. Whether you're looking for a hearty breakfast, a satisfying lunch, a delectable dinner, tasty snacks, or refreshing smoothies, we've got you covered. </h2>
        </div>
        <div className="grid-container-nutrition">
          <div className="nutr-box">
            <img src="https://fitfusion.s3.us-west-1.amazonaws.com/breakfast.png" alt=""></img>
            <h2>Breakfast</h2>
          </div>
          <div className="nutr-box">
            <img src="https://fitfusion.s3.us-west-1.amazonaws.com/lunch1.png" alt=""></img>
            <h2>Lunch</h2>
          </div>
          <div className="nutr-box">
            <img src="https://fitfusion.s3.us-west-1.amazonaws.com/dinner1.png" alt=""></img>
            <h2>Dinner</h2>
          </div>
          <div className="nutr-box">
            <img src="https://fitfusion.s3.us-west-1.amazonaws.com/smoothies.png" alt=""></img>
            <h2>Smoothies</h2>
          </div>
          <div className="nutr-box">
            <img src="https://fitfusion.s3.us-west-1.amazonaws.com/desserts.png" alt=""></img>
            <h2>Desserts</h2>
          </div>
          <div className="nutr-box">
            <img src="https://fitfusion.s3.us-west-1.amazonaws.com/snacks.png" alt=""></img>
            <h2>Snacks</h2>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Nutrition
  