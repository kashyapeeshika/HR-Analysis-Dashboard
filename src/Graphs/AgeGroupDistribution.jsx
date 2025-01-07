import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// Internal import 
import Style from "../style/Graphs.css";

// Registering necessary components for ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

// Data for the graph
const ageGroupDistribution = {
  labels: ['18-25', '26-35', '36-45', '46-55', '55+'], 
  datasets: [
    {
      label: 'Age Groups',
      data: [123, 611, 471, 228, 47], 
      backgroundColor: ['#c0d6de', '#88b1c1', '#508ca4', '#365f70', '#1d323b'], 
      hoverOffset: 4, 
    },
  ],
};

// Chart options including title, legend, and layout configurations
const options = {
  plugins: {
    legend: {
      position: 'top', 
      align: 'start', 
      labels: {
        boxWidth: 20,
        boxHeight: 20, 
        padding: 10, 
        usePointStyle: true, 
      },
    },
    title: {
      display: false, 
      text: 'Age Group Distribution', 
      font: {
        size: 18, 
      },
    },
  },
  layout: {
    padding: {
      top: 0, 
    },
  },
  responsive: true,
  maintainAspectRatio: true, 
};

const AgeGroupDistribution = () => {
  return (
    <div className="card">
      {/* Card Header */}
      <div className="card-header">
        <h5 className="card-title">Age Group Distribution</h5> 
      </div>

      {/* Card Body containing the Graph */}
      <div className="card-body">
        <div style={{ position: 'relative', 
          height: '320px',
        }}>
          <Pie data={ageGroupDistribution} options={options} />
        </div>
      </div>

      {/* Card Footer (optional) */}
      <div className="card-footer">
        Last updated 3 days ago
      </div>
    </div>
  );
};

export default AgeGroupDistribution;
