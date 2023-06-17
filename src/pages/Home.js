import { useAuth0 } from "@auth0/auth0-react";


import "../styling/Home.css"

import Slider from "../components/Slider";

function Home() {

  const { loginWithRedirect } = useAuth0();
    return (
      <div className="home-container">
        <img className="header-image-home" src="https://fitfusion.s3.us-west-1.amazonaws.com/Screenshot+2023-06-16+at+5.37.56+PM.png" alt=""></img>
          <div className="headers-container">
            <h1 className="home-header1">FITFUSION</h1>
              <h2 className="home-header2">Empowering Welness</h2>
            <button className="button-styled btn-h" onClick={() => loginWithRedirect()}>SIGN UP</button>
          </div>
          <Slider/>
          <div className="home-cards-flex">
          <div className="card-home">
          <img className="img-home-cards1" src="https://fitfusion.s3.us-west-1.amazonaws.com/updated-card2.png" alt=""></img>
          <div className="text-home-cards">
            <h2>Discover new seasonal culinary delights in our revamped "Lunch" section!</h2>
            <a className="link-card" href="/lunch">TAKE ME THERE </a>
            </div>
          </div>
          <div className="card-home ">
            <img className="img-home-cards" src="https://fitfusion.s3.us-west-1.amazonaws.com/updated-new.png" alt=""></img>
            <div className="text-home-cards">
          <h2>Supercharge your ab wokout: achieve efficient and powerful results in just 7 minutes! </h2>
          <a className="link-card"  href="/workout/show/64815bba3aa4dd146875c425">TAKE ME THERE</a>
          </div>
          </div>
          <div className="card-home">
          <img className="img-home-cards" src="https://fitfusion.s3.us-west-1.amazonaws.com/Screenshot+2023-06-16+at+6.06.32+PM.png" alt=""></img>
          <div className="text-home-cards">
          <h2>Explore our enhanced analytics to discover your progress towards your goals</h2>
          <a className="link-card"  href="/analytics">TAKE ME THERE</a>
          </div>
          </div>
          </div>

      </div>
    );
  }
  
  export default Home;
  