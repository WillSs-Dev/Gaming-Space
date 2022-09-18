import { AppBar, Toolbar, MenuItem } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <AppBar position='default' color='primary'>
        <Toolbar>
          <MenuItem>Logo</MenuItem>
        </Toolbar>
      </AppBar>
  )
}

export default Header