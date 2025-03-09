import React from "react";
import { useNavigate } from "react-router-dom";

const TotalEmployees = () => {
  const navigate = useNavigate();



  return (
    <div className="card text-center border-0 bg-transparent">
      <div className="card-body p-3" >
        <h5 className="card-title p-2">Total Employees</h5>
        <p className="card-text fs-2 fw-bold">1480</p>
      </div>

    </div>
  );
};

export default TotalEmployees;
