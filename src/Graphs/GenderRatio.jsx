import React from 'react'
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '/media/masamune/HARD DISK/white_knight/Dashboard/dash-main/src/global/Graphs/graphs.css';
// Register the chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);


const GenderRatio= () => {
  const data = {
    labels: [
      'Male',
      'Female',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [889,591],
      backgroundColor: [
        '#a4c3d0',
        '#43768a',
      ],
      hoverOffset: 4
    }]
  };
  return (
    <div className="card shadow-sm col-4 ">
          {/* Card Header */}
          <div className="card-header ">
            <h5 className="card-title text-center">Gender Ratio</h5>
          </div>
    
          {/* Card Body containing the Graph */}
          <div className="card-body">
          <div style={{ position: 'relative', height: '400px' }}>

            <Doughnut data={data} />
          </div>
          </div>
    
          {/* Card Footer (optional) */}
          <div className="card-footer text-muted">
            Last updated 3 days ago
          </div>
      </div>
    );
    };

export default GenderRatio
