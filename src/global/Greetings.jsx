import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const Greetings = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('firstVisit') === null;

    if (isFirstVisit) {
      setGreeting('Hello and welcome to the dashboard! We’re glad to have you here for the first time.');
      localStorage.setItem('firstVisit', 'false');
    } else {
      const regularGreetings = [
        'Welcome back! Let’s dive into your dashboard.',
        'Good to see you again! Ready to explore?',
        'Hello again! How can we assist you today?',
        'Welcome back! Let’s get started with your dashboard.',
        'Good to see you again! Ready to take on your next task?',
        'Hey there, welcome back! Let’s check out what’s new in your dashboard.',
      ];
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
        height: '32vh',
        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
        padding: '1rem',
        fontWeight: 'bold',
        textAlign: 'center',
        background: '#508CA4',
        color: 'white',
      }}
    >
      {greeting}
    </Box>
  );
};

export default Greetings;
