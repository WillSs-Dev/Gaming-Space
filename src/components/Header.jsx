import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  ToggleButtonGroup,
  ToggleButton,
  Avatar,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

function Header() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const [view, setView] = useState('store');

  const handleChange = ({ target }) => {
    setView(target.value);
  };

  return (
    <AppBar position='relative'>
      <Toolbar
        disableGutters={mobile ? true : false}
        sx={{ justifyContent: 'space-around', gap: mobile ? 5 : 45 }}>
        <IconButton sx={{ color: '#f6f6f6', display: mobile ? '' : 'none' }}>
          <Menu fontSize='large' />
        </IconButton>

        <ToggleButtonGroup exclusive value={view} onChange={handleChange}>
          <ToggleButton value={'store'}>Store</ToggleButton>
          <ToggleButton value={'library'}>My games</ToggleButton>
          <ToggleButton value={'faq'}>FAQ</ToggleButton>
        </ToggleButtonGroup>

        <Link to='/profile'>
          <IconButton>
            <Avatar>A</Avatar>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
