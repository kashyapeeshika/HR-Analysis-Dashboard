import { Box, Stack } from '@mui/material';
import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Internal imports
import Navbar from "../global/Navbar";
import Sidebar from "../global/Sidebar";
import Greetings from "../global/Greetings";
import Footer from "../global/Footer";
import Notifications from '../global/Notifications';
import TotalEmployees from "../Graphs/TotalEmployees";
import NewHires from "../Graphs/NewHires";
import AverageTenure from '../Graphs/AverageTenure';
import AgeGroupDistribution from '../Graphs/AgeGroupDistribution';

// Styled Item for Cards
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  
}));

// Custom styles for card container
const cardContainerStyles = {
  display: 'flex',
  flexWrap: 'wrap', // Allow wrapping of cards
  gap: '16px', // Space between cards
  justifyContent: 'space-between', // Even spacing
  '@media (max-width: 768px)': {
    flexDirection: 'column', // Stack vertically on smaller screens
    alignItems: 'center',
  },
};

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >

          {/* First row */}
          <Stack 
            direction={{ xs: 'column', sm: 'row-reverse' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Item>
                <Notifications/>
              </Item>
              <Item >
                <Greetings/>
              </Item>
            </Stack>

          {/* Second Row of Cards */}
          <Box sx={{ ...cardContainerStyles, marginTop: '24px' }}>
            <Item>
              <TotalEmployees />
            </Item>
            <Item>
              <NewHires />
            </Item>
            <Item>
              <AverageTenure />
            </Item>
          </Box>

          {/* Second Row of Cards or Graphs */}
          <Box sx={{ ...cardContainerStyles, marginTop: '24px' }}>
            <Item>
              <AgeGroupDistribution/>
            </Item>
            <Item>New hires graph</Item>
          </Box>

          {/* Third row of graphs */}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
