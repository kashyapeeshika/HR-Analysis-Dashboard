import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the chart.js components needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DistanceFromHomeVsAttrition = () => {
  const labels = ['0-10', '11-30', '31+', 'Total'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Attrition (Yes)',
        data: [166, 185, 19, 370],
        backgroundColor: '#C0d6de',
        borderColor: '#C0d6de',
        borderWidth: 1,
      },
      {
        label: 'Attrition (No)',
        data: [574, 259, 277, 1110],
        backgroundColor: '#508ca4',
        borderColor: '#508ca4',
        borderWidth: 1,
      },
      {
        label: 'Total',
        data: [740, 444, 296, 1480],
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
        title: {
          display: true,
          text: 'Distance from Home',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        title: {
          display: true,
          text: 'Number of Employees',
        },
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
        text: 'Distance From Home Vs. Attrition',
      },
    },
    barPercentage: 0.8,
    categoryPercentage: 0.9,
  };

  return (
    <div className="card shadow-sm col-12 col-md-6 col-lg-4">
      {/* Card Header */}
      <div className="card-header text-center">
        <h5 className="card-title">Distance From Home Vs. Attrition</h5>
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

export default DistanceFromHomeVsAttrition;
