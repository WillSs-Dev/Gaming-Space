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
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const avatar = JSON.parse(localStorage.getItem('images'));

  const { pathname } = location;

  const [page, setPage] = useState('');

  useEffect(() => {
    const page = pathname.split('/')[1];
    setPage(page);
  }, [pathname]);

  return (
    <AppBar position='relative'>
      <Toolbar
        disableGutters={mobile ? true : false}
        sx={{ justifyContent: 'space-around', gap: mobile ? 5 : 45 }}>
        <IconButton sx={{ color: '#f6f6f6', display: mobile ? '' : 'none' }}>
          <Menu fontSize='large' />
        </IconButton>

        <ToggleButtonGroup exclusive value={page}>
          <ToggleButton value={'store'} onClick={() => navigate('/store')}>
            Store
          </ToggleButton>
          <ToggleButton value={'library'} onClick={() => navigate('/library')}>
            My Games
          </ToggleButton>
          <ToggleButton value={'faq'} onClick={() => navigate('/faq')}>
            FAQ
          </ToggleButton>
        </ToggleButtonGroup>

        <Link to='/profile'>
          <IconButton>
            <Avatar src={avatar ? avatar.profile : null}>A</Avatar>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
