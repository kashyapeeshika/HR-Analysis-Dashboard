import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Stack } from '@mui/material';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Sign Up Data:', formData);
    } else {
      console.log('Sign In Data:', formData);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff'
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: '100%',
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {/* Email Field */}
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Password Field */}
            <TextField
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />

            {/* Confirm Password Field (Only for Sign Up) */}
            {isSignUp && (
              <TextField
                required
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            )}

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>

            {/* Toggle between Sign Up & Sign In */}
            <Typography
              variant="body2"
              textAlign="center"
              onClick={() => setIsSignUp(!isSignUp)}
              sx={{ cursor: 'pointer', color: 'primary.main' }}
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </Typography>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Auth;
