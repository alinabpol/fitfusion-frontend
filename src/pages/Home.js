import "../styling/Home.css"

import Slider from "../components/Slider";

function Home() {
    return (
      <div className="home-container">
        <img className="header-image-home" src="https://fitfusion.s3.us-west-1.amazonaws.com/Screenshot+2023-06-16+at+4.14.20+PM.png" alt=""></img>
          <div className="headers-container">
            <h1 className="home-header1">FITFUSION</h1>
              <h2 className="home-header2">Empowering Welness</h2>
            <button className="button-styled btn-h">SIGN UP</button>
          </div>
          

          <Slider/>

      </div>
    );
  }
  
  export default Home;
  