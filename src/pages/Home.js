import "../styling/Home.css"

function Home() {
    return (
      <div className="home-container">
        <img className="header-image-home" src="https://fitfusion.s3.us-west-1.amazonaws.com/Screenshot+2023-06-15+at+6.42.21+PM.png" alt=""></img>
          <div className="headers-container">
            <h1 className="home-header1">FITFUSION</h1>
              <h2 className="home-header2">Empowering Welness</h2>
            <button className="button-styled btn-h">SIGN UP</button>
          </div>

      </div>
    );
  }
  
  export default Home;
  