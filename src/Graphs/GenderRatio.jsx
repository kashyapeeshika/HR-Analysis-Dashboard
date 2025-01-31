import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
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
    <StyledCard>
          {/* Card Header */}
          <StyledCardHeader
            title={<Typography variant="h6">Average Working Years By Education Field</Typography>}
          />
    
          {/* Card Body containing the Graph */}
          <CardContent>
            <ChartContainer>
              <Doughnut data={data}  />
            </ChartContainer>
          </CardContent>
    
          {/* Card Footer */}
          <StyledCardFooter>Last updated 3 days ago</StyledCardFooter>
        </StyledCard>
    );
    };

export default GenderRatio
