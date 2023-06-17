import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";


import Popup from 'reactjs-popup';

import Tooltip from "../components/Tooltip";
import RecipeForm from "../components/RecipeForm.js"

import "../styling/Nutrition.css"
import "../styling/Button.css"

function Nutrition() {

  

    return (
      <div className="nutr-page-body">
      <div className="nutrition-container">
        <div className="nutr-img-container">
          <div className="nutrition-header-container">
            <img className="header-image-nutrition" src="https://fitfusion.s3.us-west-1.amazonaws.com/nutr-header.png" alt=""></img>
              <h1 className="top-nutrition-header">Savor the Goodness: Discover a World of Flavorful and Healthy Recipes </h1>
              <h2 className="bottom-nutrition-header">We've curated a diverse collection of <span className="black-span">culinary </span>
              delights to cater to all your mealtime cravings. Whether you<span className="black-span">'re looking </span>for a hearty breakfast, 
              a satisfying lunch, a delectable dinner, <span className="black-span">tasty snacks, </span>or refreshing smoothies, we've got you covered. </h2>
            </div>
        </div>
        <div className="grid-container-nutrition">
          <div className="nutr-box">
            <Link to={'/breakfast'}>
                <Tooltip content="Breakfast">
                  <img className="img-recipes" src="https://fitfusion.s3.us-west-1.amazonaws.com/breakfast.png" alt=""></img>
                </Tooltip>
            </Link>
            <h2 className="img-headers">Breakfast</h2>
          </div>
          <div className="nutr-box">
            <Link to={'/lunch'}>
            <Tooltip content="Lunch">
              <img className="img-recipes" src="https://fitfusion.s3.us-west-1.amazonaws.com/lunch1.png" alt=""></img>
              </Tooltip>
            </Link>
            <h2 className="img-headers">Lunch</h2>
          </div>
          <div className="nutr-box">
            <Link to={'/dinner'}>
            <Tooltip content="Dinner">
              <img className="img-recipes" src="https://fitfusion.s3.us-west-1.amazonaws.com/dinner1.png" alt=""></img>
              </Tooltip>
            </Link>
            <h2 className="img-headers">Dinner</h2>
          </div>
          <div className="nutr-box">
            <Link to={'/smoothies'}>
            <Tooltip content="Smoothies">
              <img className="img-recipes" src="https://fitfusion.s3.us-west-1.amazonaws.com/smoothies.png" alt=""></img>
              </Tooltip>
            </Link>
            <h2 className="img-headers">Smoothies</h2>
          </div>
          <div className="nutr-box">
            <Link to={'/desserts'}>
            <Tooltip content="Desserts">
              <img className="img-recipes" src="https://fitfusion.s3.us-west-1.amazonaws.com/desserts.png" alt=""></img>
              </Tooltip>
            </Link>
            <h2 className="img-headers">Desserts</h2>
          </div>
          <div className="nutr-box">
            <Link to={'/snacks'}>
            <Tooltip content="Snacks">
              <img className="img-recipes" src="https://fitfusion.s3.us-west-1.amazonaws.com/snacks.png" alt=""></img>
              </Tooltip>
            </Link>
            <h2 className="img-headers">Snacks</h2>
          </div>
        </div>

        <div className="text-container">
          <div className="overlay-box">
           <h2>SHARE YOUR RECIPES WITH US!</h2><br/>
           <Popup trigger={
                  <div>
            <button className="button-styled btn-n">SHARE</button>
            </div>
             }modal nested>
             {close => (
               <div className='popup-window nutrition-popup'>
                 <button className="close" tabIndex="0" onClick=
                   {() => close()}>
                        <FaTimes />
                 </button>
                 <div className="popup-container">
                   </div>
                    <div className="recipe-form-container">
                      <RecipeForm/>
                    </div>
                  </div>
                  )}
            </Popup>
          </div>
            <img className="img-nutr-footer" src="https://fitfusion.s3.us-west-1.amazonaws.com/updated.jpg" alt=""/> 
        </div>
      </div>
    </div>
    );
  }

  export default Nutrition
  