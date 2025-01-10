import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles'; // Import useTheme hook
import { Box } from '@mui/material'; // Using Box for layout and styling

const Greetings = () => {
  const [greeting, setGreeting] = useState('');
  const theme = useTheme(); // Get the current theme

  useEffect(() => {
    // Check if it's the user's first visit
    const isFirstVisit = localStorage.getItem('firstVisit') === null;

    if (isFirstVisit) {
      // Set a welcome greeting for first-time users
      setGreeting('Hello and welcome to the dashboard! We’re glad to have you here for the first time.');
      // Mark the user as no longer a first-time visitor
      localStorage.setItem('firstVisit', 'false');
    } else {
      // Set a different greeting for regular users
      const regularGreetings = [
        'Welcome back! Let’s dive into your dashboard.',
        'Good to see you again! Ready to explore?',
        'Hello again! How can we assist you today?',
        'Welcome back! Let’s get started with your dashboard.',
        'Good to see you again! Ready to take on your next task?',
        'Hey there, welcome back! Let’s check out what’s new in your dashboard.',
      ];
      // Choose a random greeting
      const randomGreeting = regularGreetings[Math.floor(Math.random() * regularGreetings.length)];
      setGreeting(randomGreeting);
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontSize: '1.5rem',
        padding: '1rem',
        color: theme.palette.text.primary, 
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundImage: `linear-gradient(120deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.main} 100%)`,
      }}
    >
      {greeting}
    </Box>
  );
};

export default Greetings;
