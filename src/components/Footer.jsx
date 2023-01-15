import React from 'react'
import { Toolbar, Typography, AppBar } from '@mui/material'

function Footer() {
  return (
    <AppBar position="relative" color="primary" sx={{ backgroundColor: '#05101c' }}>
      <Toolbar sx={{ justifyContent: 'center', gap: 1 }}>
        <Typography variant="body1">
          Project by: {<a target='/' href='https://www.linkedin.com/in/willian-silva-/' style={{ textDecoration: 'underline', color: 'inherit' }}>Willian Silva</a>}
        </Typography>
        <span>-</span>
        <Typography variant="body1">
          Made with: React, MUI and ❤️
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;
