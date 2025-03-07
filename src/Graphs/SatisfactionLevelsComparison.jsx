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

const SatisfactionLevelsComparison = () => {
  const labels = ['Work-Life Balance', 'Job Satisfaction', 'Relationship Satisfaction'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Satisfaction Level Comparison',
        data: [3.8, 3.5, 4.1],
        backgroundColor: [
          '#c0d6de80',
          '#508ca480',
          '#1d323b80'
        ],
        borderColor: [
          '#c0d6de',
          '#508ca4',
          '#1d323b'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y', // This makes the bar chart horizontal
    scales: {
      x: {
        beginAtZero: true,
        max: 5, // Assuming satisfaction levels are out of 5
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Satisfaction Levels Comparison',
      },
    },
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

export default SatisfactionLevelsComparison;
