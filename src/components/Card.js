import React from 'react'
import '../Card.css'
import AnalyticsCircle from './AnalyticsCircle';

const Card = ({ children }) => {
    return <div className="card">{children}</div>;
  };
  
  export default Card;