import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Registering the chart.js components needed
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

// Styled components
const StyledCard = styled(Card)({
  maxWidth: 800,
  margin: 'auto',
});

const StyledCardHeader = styled(CardHeader)({
  padding: '16px',                        
});

const StyledCardFooter = styled(CardActions)({
  textAlign: 'center',
  padding: '8px',
  fontSize: '0.85rem',
  color: '#666',
});

const ChartContainer = styled('div')({
  position: 'relative',
  height: '320px',
});

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
    <StyledCard>
    {/* Card Header */}
    <StyledCardHeader
      title={<Typography variant="h6" align="center">Education Levels vs. Average Years At Company</Typography>}
    />

    {/* Card Body containing the Graph */}
    <CardContent>
      <ChartContainer>
        <Line data={data} options={options} />
      </ChartContainer>
    </CardContent>

    {/* Card Footer */}
    <StyledCardFooter>Last updated 3 days ago</StyledCardFooter>
  </StyledCard>
  );
};

export default WorkLifeBalanceVsAttrition;
