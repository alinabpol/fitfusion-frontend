import { useState } from "react"
import "../styling/BMI.css"

const BMI = () => {

    // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {

    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
 

 
  return (

    <div className='container-bmi'>
      <h2 className='center'>Check Your BMI</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label className="bmi-forms">Weight (lbs)</label>
          <input className="bmi-input" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (in)</label>
          <input className="bmi-input" value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
       
 
        <div>
        <br></br>
          <button className='button-styled' type='submit'>Submit</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>

  );
}
 


export default BMI