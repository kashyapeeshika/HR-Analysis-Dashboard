import React, { useEffect, useState } from 'react';

const Greetings = () => {
  const [greeting, setGreeting] = useState('');

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
      ];
      // Choose a random greeting
      const randomGreeting = regularGreetings[Math.floor(Math.random() * regularGreetings.length)];
      setGreeting(randomGreeting);
    }
  }, []);

 
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '20px',
        textAlign: 'center',
        fontSize: '1.5rem',
        color: '#508CA4',
        width: '100%', 
        maxWidth: '1250px', 
        minWidth: '1150px',
        margin: '0 auto', 
        marginBottom: '1rem', 
        justifyContent: 'space-between', 
        '@media (max-width: 768px)': {
          flexDirection: 'column', 
          alignItems: 'center',
  },
      }}
    >
      {greeting}
    </div>
  );
};

export default Greetings;
