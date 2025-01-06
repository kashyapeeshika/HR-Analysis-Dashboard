import React from 'react'
import { useNavigate } from "react-router-dom"; 


const NewHires = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/employees"); 
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-body text-center">
        <h5 className="card-title">New Hires</h5>
        <p className="card-text fs-2 fw-bold">80</p>
      </div>
    </div>
  );
};
export default NewHires
