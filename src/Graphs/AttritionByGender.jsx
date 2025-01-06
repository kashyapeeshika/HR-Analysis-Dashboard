import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the chart.js components needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttritionRateByGender = () => {
  const labels = [
    'Male',
    'Female',
  ];

  const data = {
    labels: labels,
    datasets: [
        {
            label: 'Total Employees',
            data: [889, 591], 
            backgroundColor: '#C0d6de', 
            borderColor: '#C0d6de',
            borderWidth: 1,
          },
          {
            label: 'Attrition (Yes)',
            data: [130, 80], 
            backgroundColor: '#508ca4', 
            borderColor: '#508ca4',
            borderWidth: 1,
          },
          {
            label: 'Attrition (No)',
            data: [759, 511], 
            backgroundColor: '#1d323b', 
            borderColor: '#1d323b',
            borderWidth: 1,
          },    
   
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        stacked: true, 
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stacked: true, 
        max: 2000, 
        ticks: {
          stepSize: 200, 
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Attrition Rate By Department and Gender',
      },
    },
    barPercentage: 0.8, 
    categoryPercentage: 0.9, // Adjust spacing between categories
  };

  return (
    <div className="card shadow-sm col-12 col-md-6 col-lg-4">
      {/* Card Header */}
      <div className="card-header text-center">
        <h5 className="card-title">Attrition Rate By Department and Gender</h5>
      </div>

      {/* Card Body containing the Graph */}
      <div className="card-body">
        <div style={{ position: 'relative', height: '400px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>

      {/* Card Footer (optional) */}
      <div className="card-footer text-muted">
        Last updated 3 days ago
      </div>
    </div>
  );
};

export default AttritionRateByGender;
