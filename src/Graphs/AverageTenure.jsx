import React from 'react';
import { useNavigate } from "react-router-dom"; 


const AverageTenure = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/employees"); 
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-body text-center">
        <h5 className="card-title">Average Tenure</h5>
        <p className="card-text fs-2 fw-bold">80152</p>
      </div>
    </div>
  );
};

export default AverageTenure;
