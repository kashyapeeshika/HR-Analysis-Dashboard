import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Registering the chart.js components needed
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const WorkLifeBalanceVsAttrition = () => {
  const chartRef = useRef(null);

  const labels = [
    '1 (Poor)',
    '2 (Fair)',
    '3 (Good)',
    '4 (Excellent)',
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Employees',
        data: [81, 346, 889, 154],
        borderColor: '#C0d6de', 
        backgroundColor: '#C0d6de', 
        borderWidth: 2,
        tension: 0.4, 
        fill: false, 
      },
      {
        label: 'Attrition (Yes)',
        data: [56, 288, 771, 127],
        borderColor: '#508ca4', // Line color for Attrition (Yes)
        backgroundColor: '#508ca4', // Fills the area under the line
        borderWidth: 2,
        tension: 0.4,
        fill: false, // Fill the area under the line
      },
      {
        label: 'Attrition (No)',
        data: [25, 58, 128, 27],
        borderColor: '#1d323b', // Line color for Attrition (No)
        backgroundColor: '#1d323b', // Fills the area under the line
        borderWidth: 2,
        tension: 0.4,
        fill: false, // Fill the area under the line
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
        display: false,
        text: 'Work-Life Balance vs Attrition Rate', 
      },
    },
  };

  // Ensure the previous chart is destroyed when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     const chartInstance = chartRef.current?.chartInstance;
  //     if (chartInstance) {
  //       chartInstance.destroy(); // Destroy the previous chart instance
  //     }
  //   };
  // }, []);

  return (
    <div className="card shadow-sm col-12 col-md-6 col-lg-4">
      {/* Card Header */}
      <div className="card-header text-center">
        <h5 className="card-title">Attrition Rate By Work-Life Balance</h5>
      </div>

      {/* Card Body containing the Graph */}
      <div className="card-body">
        <div style={{ position: 'relative', height: '400px' }}>
          <Line ref={chartRef} data={data} options={options} />
        </div>
      </div>

      {/* Card Footer (optional) */}
      <div className="card-footer text-muted">
        Last updated 3 days ago
      </div>
    </div>
  );
};

export default WorkLifeBalanceVsAttrition;
