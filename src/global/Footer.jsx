import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <AppBar
  position="static"
  color="#ffffff"
  sx={{
    position: 'sticky',
    bottom: 0,
    mt: 'auto',
  }}
>
<Toolbar>
  <Typography
    variant="body1"
    color="inherit"
    align="center"
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexGrow: 1 
    }}
  >
    © {new Date().getFullYear()}, Made with{' '}
    <FavoriteIcon
      sx={{ 
        mx: 0.5, 
        color: 'red', 
      }} 
    />
    by Covert Works
  </Typography>
</Toolbar>
</AppBar>

  );
};

export default Footer;
