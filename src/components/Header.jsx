import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  ToggleButtonGroup,
  ToggleButton,
  Avatar,
  Stack,
} from '@mui/material';
import { SportsEsports } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [page, setPage] = useState('');
  
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const images = JSON.parse(localStorage.getItem('images'));
  const { pathname } = location;


  useEffect(() => {
    const page = pathname.split('/')[1];
    setPage(page);
  }, [pathname]);

  return (
    <AppBar position='relative'>
      <Toolbar
        disableGutters={mobile ? true : false}
        sx={{ justifyContent: 'space-around', gap: mobile ? 5 : 45 }}>
        <Stack direction='row' alignItems='center' spacing={4}>
          <SportsEsports fontSize='large' />
          <ToggleButtonGroup exclusive value={page}>
            <ToggleButton value={'store'} onClick={() => navigate('/store')}>
              Store
            </ToggleButton>
            <ToggleButton
              value={'library'}
              onClick={() => navigate('/library')}>
              My Games
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Link to='/profile'>
          <IconButton>
            <Avatar
              src={images ? images.profile : null}
              sx={{ border: '3px solid #f6f6f6' }}>
              A
            </Avatar>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
