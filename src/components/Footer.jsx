import { Toolbar, Typography, AppBar } from '@mui/material'

function Footer({ mobile }) {
  return (
    <AppBar position="relative" color="primary" sx={{ backgroundColor: '#05101c' }}>
      <Toolbar sx={{ justifyContent: 'center', gap: 1 }}>
        <Typography fontSize={ mobile ? '14px' : '16px'}>
          Project by: {<a target='/' href='https://www.linkedin.com/in/willian-silva-/' style={{ textDecoration: 'underline', color: 'inherit' }}>Willian Silva</a>}
        </Typography>
        <span>-</span>
        <Typography fontSize={ mobile ? '14px' : '16px'}>
          Made with: React, MUI and ❤️
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;
