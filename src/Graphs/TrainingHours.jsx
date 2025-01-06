import React, { useState } from "react";

// Sample data for 1,480 employees
const employeeData = Array.from({ length: 1480 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  department: ["Engineering", "Data Science", "Marketing", "Sales", "HR", "R&D"][i % 6],
  positionLevel: ["Junior", "Mid-level", "Senior"][i % 3],
  avgTrainingHours: [40, 35, 30][i % 3],
  minTrainingHours: [30, 25, 20][i % 3],
  maxTrainingHours: [50, 45, 40][i % 3],
  trainingCompleted: Math.floor(Math.random() * 40) + 10, // Random training completed
}));

const ITEMS_PER_PAGE = 11; // Display fewer rows per page to avoid scrolling

const TrainingHours = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current slice of employees to show
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEmployees = employeeData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Calculate total pages
  const totalPages = Math.ceil(employeeData.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="row col-lg-6">
      <div>
        <table className="table table-striped table-info table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Position Level</th>
              <th scope="col">Average Training Hours (Per Year)</th>
              <th scope="col">Minimum Training Hours</th>
              <th scope="col">Maximum Training Hours</th>
              <th scope="col">Training Completed</th>
              <th scope="col">Training Left</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id}>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.positionLevel}</td>
                <td>{employee.avgTrainingHours}</td>
                <td>{employee.minTrainingHours}</td>
                <td>{employee.maxTrainingHours}</td>
                <td>{employee.trainingCompleted}</td>
                <td>
                  {employee.maxTrainingHours - employee.trainingCompleted}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-secondary"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TrainingHours;
