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
import React from 'react';
import { useTheme } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import { selectCurrentPage, setPage } from '../redux/reducers/pageSlice';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const page = useSelector(selectCurrentPage);

  const handleChange = ({ target }) => {
    dispatch(setPage(target.value));
  };

  const resetHeader = () => {
    dispatch(setPage(''));
  };

  return (
    <AppBar position='relative'>
      <Toolbar
        disableGutters={mobile ? true : false}
        sx={{ justifyContent: 'space-around', gap: mobile ? 5 : 45 }}>
        <IconButton sx={{ color: '#f6f6f6', display: mobile ? '' : 'none' }}>
          <Menu fontSize='large' />
        </IconButton>

        <ToggleButtonGroup exclusive value={page} onChange={handleChange}>
          <ToggleButton value={'store'} onClick={() => navigate('/')}>
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
          <IconButton onClick={resetHeader}>
            <Avatar>A</Avatar>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
