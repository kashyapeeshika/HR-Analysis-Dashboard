import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Styled Avatar for Team Members
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  margin: 'auto',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontSize: theme.typography.h4.fontSize,
}));

const About = () => {
  const teamMembers = [
    { 
      name: 'Eeshika Kashyap', 
      role: 'Developer', 
      initials: 'EK',
      linkedIn: 'https://www.linkedin.com/in/eeshika-kashyap/',
      github: 'https://github.com/eeshikakashyap',
    },
    { 
      name: 'Apoorv Kumar', 
      role: 'Developer', 
      initials: 'AK',
      linkedIn: 'https://www.linkedin.com/in/apoorv-kumar/',
      github: 'https://github.com/apoorvkumar',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, #f8fafc, #e0e7ff)',
        paddingY: 4,
      }}
    >
      {/* Main Title */}
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          About Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Our mission is to build a powerful, user-friendly platform that helps individuals and businesses thrive. We're passionate
          about creating solutions that matter.
        </Typography>
      </Container>

      {/* Team Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh', // Center cards vertically
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    paddingY: 2,
                    boxShadow: 3,
                    borderRadius: 2,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <StyledAvatar>{member.initials}</StyledAvatar>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                      {member.linkedIn && (
                        <IconButton href={member.linkedIn} target="_blank" color="primary">
                          <LinkedInIcon />
                        </IconButton>
                      )}
                      {member.github && (
                        <IconButton href={member.github} target="_blank" color="default">
                          <GitHubIcon />
                        </IconButton>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Covert Works. Empowering creativity and innovation.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            <a href="/privacy" style={{ textDecoration: 'none', color: '#555' }}>Privacy Policy</a> | 
            <a href="/contact" style={{ textDecoration: 'none', color: '#555', marginLeft: '8px' }}>Contact Us</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
