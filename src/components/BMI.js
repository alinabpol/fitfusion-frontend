import { useState } from "react"
import "../styling/BMI.css"

const BMI = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === '') {
      alert('Please enter a valid weight and height');
    } else {
      // convert weight from pounds to kilograms
      const weightInKg = weight * 0.453592;

      // extract feet and inches values from the combined height input
      const [feet, inches] = height.split('.');
      
      // convert feet and inches to total inches
      const heightInInches = parseInt(feet) * 12 + parseInt(inches);

      // convert height from inches to meters
      const heightInM = heightInInches * 0.0254;


      const bmi = weightInKg / (heightInM * heightInM);
      setBmi(bmi.toFixed(1));


      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  return (
    <div className="container-bmi">
      <h2 className="center">Check Your BMI</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label className="bmi-forms">Weight (lbs)</label>
          <input
            className="bmi-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div>
          <label>Height (ft.in)</label>
          <input
            className="bmi-input"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </div>

        <div>
          <br />
          <button className="button-styled" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="center">
        <h3>Your BMI: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default BMI;