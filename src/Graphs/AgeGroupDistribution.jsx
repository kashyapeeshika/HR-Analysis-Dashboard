import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ageGroupDistribution } from '../data/totalEmployeeData'; // Move this import to the top

ChartJS.register(ArcElement, Tooltip, Legend);

const AgeGroupDistribution = () => {
  return (
    <div className="card shadow-sm col-4">
      {/* Card Header */}
      <div className="card-header">
        <h5 className="card-title text-center">Age Group Distribution</h5>
      </div>

      {/* Card Body containing the Graph */}
      <div className="card-body">
        <div style={{ position: 'relative', height: '400px' }}>
          <Pie data={ageGroupDistribution} />
        </div>
      </div>

      {/* Card Footer (optional) */}
      <div className="card-footer text-muted">
        Last updated 3 days ago
      </div>
    </div>
  );
};

export default AgeGroupDistribution;
