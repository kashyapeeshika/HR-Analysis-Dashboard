import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AverageSalaryByDepartment = () => {
  const labels = ['Sales', 'Human Resources', 'Research & Development'];
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Average Salary By Department',
          data: [450000, 520000, 700000],
          backgroundColor: [
            '#c0d6de80',
            '#508ca480',
            '#1d323b80'
          ],
          borderColor: [
            '#c0d6de',
            '#508ca4',
            '#1d323b'
          ],
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      indexAxis: 'y', 
      scales: {
        x: {
          beginAtZero: true,
          max: 900000, 
          ticks: {
            stepSize: 100000,
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Average Salary By Department',
        },
      },
    };
  
    return (
      <div className="card shadow-sm col-12 col-md-6 col-lg-4">
        {/* Card Header */}
        <div className="card-header text-center">
          <h5 className="card-title">Average Salary By Department</h5>
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

export default AverageSalaryByDepartment
