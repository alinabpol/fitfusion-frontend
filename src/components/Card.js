import React from 'react'
import '../styling/Card.css'

const Card = ({ children }) => {
    return <div className="card">{children}</div>;
  };
  
  export default Card;