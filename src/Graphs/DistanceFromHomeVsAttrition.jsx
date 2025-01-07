import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Registering the chart.js components needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Styled components
const StyledCard = styled(Card)({
  maxWidth: 600,
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
    <StyledCard>
          {/* Card Header */}
          <StyledCardHeader
            title={<Typography variant="h6" align="center">Distance From Home vs. Attrition</Typography>}
          />
    
          {/* Card Body containing the Graph */}
          <CardContent>
            <ChartContainer>
              <Bar data={data} options={options} />
            </ChartContainer>
          </CardContent>
    
          {/* Card Footer */}
          <StyledCardFooter>Last updated 3 days ago</StyledCardFooter>
        </StyledCard>
  );
};

export default DistanceFromHomeVsAttrition;
