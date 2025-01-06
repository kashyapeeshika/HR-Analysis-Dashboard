import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '/media/masamune/HARD DISK/white_knight/Dashboard/dash-main/src/global/Graphs/graphs.css';
// Register the chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const BusinessTravelAnalysis = () => {
  const data = {
          labels: [
            'Travel Rarely',
            'Travel-Rarely',
            'Non Travel',
            'Travel Frequently'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [70.4, 0.5, 10.2, 18.9],
            backgroundColor: [
              '#C0D6DE',
              '#88b1c1',
              '#508CA4',
              '#365F70',
              '#1D323B'
            ],
            hoverOffset: 4
          }]
        };
  
    return (
      <div className="card shadow-sm col-4">
        {/* Card Header */}
        <div className="card-header">
          <h5 className="card-title text-center">Business Travel Analysis</h5>
        </div>
  
        {/* Card Body containing the Graph */}
        <div className="card-body">
        <div style={{ position: 'relative', height: '400px' }}>
          <Pie data={data} />
        </div>
        </div>
  
        {/* Card Footer (optional) */}
        <div className="card-footer text-muted">
          Last updated 3 days ago
        </div>
    </div>
  );
  };

export default BusinessTravelAnalysis
