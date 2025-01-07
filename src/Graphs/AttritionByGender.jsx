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

// Data and Configuration for Chart
const AttritionRateByGender = () => {
  const labels = ['Male', 'Female'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Employees',
        data: [889, 591],
        backgroundColor: '#C0d6de',
        borderColor: '#C0d6de',
        borderWidth: 1,
      },
      {
        label: 'Attrition (Yes)',
        data: [130, 80],
        backgroundColor: '#508ca4',
        borderColor: '#508ca4',
        borderWidth: 1,
      },
      {
        label: 'Attrition (No)',
        data: [759, 511],
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
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Genders',
          font: {
            weight: 'bold',
          },
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        max: 2000,
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
        align: 'end',
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          padding: 10,
          usePointStyle: true,
        },
      },
      title: {
        display: false,
      },
    },
    barPercentage: 0.4,
    categoryPercentage: 0.6,
  };

  return (
    <StyledCard>
      {/* Card Header */}
      <StyledCardHeader
        title={<Typography variant="h6" align="center">Attrition Rate By Gender</Typography>}
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

export default AttritionRateByGender;
