import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Registering the chart.js components needed
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const EducationLevelVsAverageYearsAtCompany = () => {
  const chartRef = useRef(null);
  
    const labels = [
      "High School/Some College",
      "Associate's Degree",
      "Bachclor's Degree",
      "Master's Degree",
      'Doctoral Degree', 
    ];
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Total Years',
          data: [2.8, 3.5, 4.2, 5.1, 6.3],
          borderColor: '#508ca4',
          backgroundColor: '#508ca4' ,
          borderWidth: 2,
          tension: 0.4, 
          fill: false, 
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
          max: 10.0, 
          ticks: {
            stepSize: 1.0, 
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

export default EducationLevelVsAverageYearsAtCompany
