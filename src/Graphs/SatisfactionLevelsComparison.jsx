import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SatisfactionLevelsComparison = () => {
  const labels = ['Work-Life Balance', 'Job Satisfaction', 'Relationship Satisfaction'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Satisfaction Level Comparison',
        data: [3.8, 3.5, 4.1],
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
    indexAxis: 'y', // This makes the bar chart horizontal
    scales: {
      x: {
        beginAtZero: true,
        max: 5, // Assuming satisfaction levels are out of 5
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Satisfaction Levels Comparison',
      },
    },
  };

  return (
    <div className="card shadow-sm col-12 col-md-6 col-lg-4">
      {/* Card Header */}
      <div className="card-header text-center">
        <h5 className="card-title">Satisfaction Levels Comparison</h5>
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

export default SatisfactionLevelsComparison;
