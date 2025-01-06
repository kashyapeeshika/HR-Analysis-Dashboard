import React from "react";
import { useNavigate } from "react-router-dom"; 
// Internal import 
// import Style from "../style/Style.css";
import "./graphs.css";


const TotalEmployees = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/employees"); 
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-body text-center">
        <h5 className="card-title">Total Employees</h5>
        <p className="card-text fs-2 fw-bold">1480</p>
      </div>
    </div>
  );
};

export default TotalEmployees;
