import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Registering necessary components for ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

// Styled components
const StyledCard = styled(Card)({
  maxWidth: 400,
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

// Data for the graph
const ageGroupDistribution = {
  labels: ['Travel-Rarely', 'TravelRarely', 'Non-Travel', 'Travel-Frequently'],
  datasets: [
    {
      label: 'Age Groups',
      data: [70.4, 0.5, 10.2, 18.9],
      backgroundColor: ['#c0d6de', '#88b1c1', '#508ca4', '#365f70', '#1d323b'],
      hoverOffset: 4,
    },
  ],
};

// Chart options including title, legend, and layout configurations
const options = {
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
  layout: {
    padding: {
      top: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: true,
};

const BusinessTravelAnalysis = () => {
  return (
    <StyledCard>
      {/* Card Header */}
      <StyledCardHeader
        title={<Typography variant="h6">Business Travel Analysis</Typography>}
      />

      {/* Card Body containing the Graph */}
      <CardContent>
        <ChartContainer>
          <Pie data={ageGroupDistribution} options={options} />
        </ChartContainer>
      </CardContent>

      {/* Card Footer */}
      <StyledCardFooter>Last updated 3 days ago</StyledCardFooter>
    </StyledCard>
  );
};

export default BusinessTravelAnalysis;
