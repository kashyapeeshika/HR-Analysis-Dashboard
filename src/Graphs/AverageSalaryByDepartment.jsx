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
});

const StyledCardHeader = styled(CardHeader)({
  color: '#000',
  textAlign: 'center',
});

const StyledCardFooter = styled(CardActions)({
  textAlign: 'center',
  fontSize: '0.85rem',
  color: '#666',
});

const ChartContainer = styled('div')({
  position: 'relative',
  height: '320px',
});

const AverageSalaryByDepartment = () => {
  const labels = ['Sales', 'HR', 'R&D'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Average Salary By Department',
        data: [450, 520, 700],
        backgroundColor: ['#c0d6de80', '#508ca480', '#1d323b80'],
        borderColor: ['#c0d6de', '#508ca4', '#1d323b'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y', // Horizontal bar chart
    scales: {
      x: {
        beginAtZero: true,
        max: 900,
        ticks: {
          stepSize: 100,
        },
        title: {
          display: true,
          text: 'Salary (in k)',
          font: {
            weight: 'bold',
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Department',
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
        display: true,
        text: 'Average Salary By Department',
      },
    },
  };

  return (
     <StyledCard>
          {/* Card Header */}
          <StyledCardHeader
            title={<Typography variant="h6">Average Salary Department</Typography>}
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

export default AverageSalaryByDepartment;
