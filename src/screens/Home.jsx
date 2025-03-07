import React from 'react';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Internal Imports
import Navbar from "../global/Navbar";
import Sidebar from "../global/Sidebar";
import Greetings from '../global/Greetings';
import Footer from "../global/Footer";
import Notifications from '../global/Notifications';
import TotalEmployees from "../Graphs/TotalEmployees";
import NewHires from "../Graphs/NewHires";
import AverageTenure from '../Graphs/AverageTenure';
import AttritionRateByDepartment from '../Graphs/AttritionRateByDepartment';
import AverageSalaryByDepartment from '../Graphs/AverageSalaryByDepartment';

// Styled Item for Cards
const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));

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
            p: 1,
          }}
        >
          {/* First Row */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            sx={{
              mb: 6, 
            }}
          >
            <Item sx={{ height: '300px', 
              width: '77%',

            }}>
              <Greetings />
            </Item>
            <Item sx={{ height: '300px', 
              width: '22%',
            }}>
              <Notifications />
            </Item>
          </Stack>

          {/* Second Row */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              '& > *': {
                flexGrow: 1, 
              },
            }}
          >
            <Item sx={{ height: '450px' }}> 
              <AttritionRateByDepartment />
            </Item>
            <Item sx={{ height: '450px' }}> 
              <AverageSalaryByDepartment />
            </Item>
            <Stack
              direction="column"
              spacing={9}
              sx={{
                width: '22%',  
                position: 'relative',
                alignContent: 'start',
                justifyContent: 'right',
              }}
            >
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
          </Stack>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
