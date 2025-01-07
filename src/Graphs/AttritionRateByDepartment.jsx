import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering the Chart.js components needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AttritionRateByDepartment = () => {
  const labels = ['Research & Development', 'Sales', 'Human Resources'];

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
        label: 'Attrition (Yes)',
        data: [133, 93, 12],
        backgroundColor: '#508ca480',
        borderColor: '#508ca4',
        borderWidth: 1,
      },
      {
        label: 'Attrition (No)',
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
        grid: {
          display: false, // Hides grid lines on the x-axis
        },
        title: {
          display: true,
          text: 'Departments',
          font: {
            weight: 'bold',
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 1200,
        ticks: {
          stepSize: 200,
        },
        title: {
          display: true,
          text: 'Number of Employees',
          font: {
            weight: 'bold',
          },
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
        font: {
          size: 18,
        },
      },
    },
    barPercentage: 0.8,
    categoryPercentage: 0.9,
  };

  return (
    <div className="card shadow-sm col-lg-6 col-md-8 mx-auto">
      {/* Card Header */}
      <div className="card-header bg-primary text-white text-center">
        <h5 className="card-title mb-0">Attrition Rate By Department</h5>
      </div>

      {/* Card Body containing the Graph */}
      <div className="card-body">
        <div style={{ position: 'relative', height: '400px', width: '100%' }}>
          <Bar data={data} options={options} />
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer text-muted text-center">
        Last updated 3 days ago
      </div>
    </div>
  );
};

export default AttritionRateByDepartment;
