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

//Graphs
import AttritionRateByDepartment from '../Graphs/AttritionRateByDepartment';
import AverageSalaryByDepartment from '../Graphs/AverageSalaryByDepartment';

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
  flexWrap: 'wrap', 
  gap: '10px', 
  justifyContent: 'space-between', 
  '@media (max-width: 768px)': {
    flexDirection: 'column', 
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
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            cardContainerStyles
            >
              <Item >
                <Greetings/>
              </Item>
              <Item>
                <Notifications/>
              </Item>
            </Stack>

          {/* Second Row of Cards */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            cardContainerStyles
          >
            <Item>
              <AttritionRateByDepartment/>
            </Item>
            <Item>
              <AverageSalaryByDepartment/>
            </Item>
            <Item>  
            <Stack>
              <Item>
                <TotalEmployees />
              </Item>
              <Item>
                <NewHires />
              </Item>
              <Item>
                <AverageTenure />
              </Item>
            </Stack>
            </Item>
          </Stack>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
