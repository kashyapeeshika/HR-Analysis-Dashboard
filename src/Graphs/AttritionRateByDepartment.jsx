import { Bar } from 'react-chartjs-2';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the chart.js components needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttritionRateByDepartment = () => {
  const labels = [
    'Research & Development',
    'Sales',
    'Human Resources'
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Employees',
        data: [967, 450, 63], 
        backgroundColor: '#C0d6de80',
        borderColor: '#C0d6de',
        borderWidth: 1,
      },
      {
        label: 'Attrition(Yes)',
        data: [133, 93, 12], 
        backgroundColor: '#508ca480',
        borderColor: '#508ca4',
        borderWidth: 1,
      },
      {
        label: 'Attrition(No)',
        data: [834, 357, 51], 
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
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 1200, 
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
        display: true,
        text: 'Attrition Rate By Department',
      },
    },
    barPercentage: 0.8, 
    categoryPercentage: 0.9, 
  };

  return (
    <div className="card shadow-sm col-5">

      {/* Card Body containing the Graph */}
      {/* <div className="card-body">
        <div style={{ position: 'fixed', height: '500px', width: '522px' }}>
          <Bar data={data} options={options} />
        </div>
      </div> */}

      {/* Card Footer (optional) */}
      <div className="card-footer text-muted">
        Last updated 3 days ago
      </div>
    </div>
  );
};

export default AttritionRateByDepartment;
