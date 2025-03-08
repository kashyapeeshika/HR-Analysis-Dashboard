import React from "react";
import { useNavigate } from "react-router-dom";

const TotalEmployees = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/employees");
  };

  return (
    <div className="card text-center border-0 bg-transparent">
      <div className="card-body p-3" onClick={handleClick}>
        <h5 className="card-title p-2">Total Employees</h5>
        <p className="card-text fs-2 fw-bold">1480</p>
      </div>
      <div className="card-footer bg-transparent border-0 mb-2">
        <button className="btn btn-primary" onClick={handleClick}>
          View Employees
        </button>
      </div>
    </div>
  );
};

export default TotalEmployees;
