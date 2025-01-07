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
  // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
});

const StyledCardHeader = styled(CardHeader)({
  backgroundColor: '#f5f5f5',
  padding: '16px',
  borderBottom: '1px solid #ddd',
});

const StyledCardFooter = styled(CardActions)({
  textAlign: 'center',
  padding: '8px',
  backgroundColor: '#f9f9f9',
  fontSize: '0.85rem',
  color: '#666',
});

const ChartContainer = styled('div')({
  position: 'relative',
  height: '320px',
});

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

export default EducationLevelVsAverageYearsAtCompany
