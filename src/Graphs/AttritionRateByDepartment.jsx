import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Styled components
const StyledCard = styled(Card)({
  maxWidth: '700px',
  margin: '20px auto',
  borderRadius: '12px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
});

const StyledCardHeader = styled(CardHeader)({
  backgroundColor: '#f5f5f5',
  color: '#000',
  textAlign: 'center',
  padding: '16px',
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

const AttritionRateByDepartment = () => {
  const labels = ['Research & Development', 'Sales', 'Human Resources'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Employees',
        data: [967, 450, 63],
        backgroundColor: '#C0d6de80',
        borderColor: '#C0d6de',
        borderWidth: 1,
      },
      {
        label: 'Attrition (Yes)',
        data: [133, 93, 12],
        backgroundColor: '#508ca480',
        borderColor: '#508ca4',
        borderWidth: 1,
      },
      {
        label: 'Attrition (No)',
        data: [834, 357, 51],
        backgroundColor: '#1d323b',
        borderColor: '#1d323b',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Departments',
          font: {
            weight: 'bold',
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 1200,
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
    barPercentage: 0.8,
    categoryPercentage: 0.9,
  };

  return (
    <StyledCard>
      {/* Card Header */}
      <StyledCardHeader
        title={<Typography variant="h6">Attrition Rate By Department</Typography>}
      />

      {/* Card Content */}
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

export default AttritionRateByDepartment;
