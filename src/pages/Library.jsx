import {
  Paper,
  useMediaQuery,
  useTheme,
  Typography,
  Toolbar,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Header, Footer, GamesList } from '../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGamesInLibrary } from '../redux/reducers/libraryReducer';
import { selectFavoriteGames } from '../redux/reducers/favoriteReducer';

function Library() {
  const [view, setView] = useState('All');
  const [userGames, setUserGames] = useState([]);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { games } = useSelector(selectGamesInLibrary);
  const { favoriteGames } = useSelector(selectFavoriteGames);

  useEffect(() => {
    const userIsLogged = JSON.parse(localStorage.getItem('login'));

    if (!userIsLogged) {
      return navigate('/login');
    }

    if (view === 'Favorites') {
      return setUserGames(favoriteGames);
    }
    setUserGames(games);
  }, [games, navigate, view, favoriteGames]);

  const handleViewChange = ({ target }) => {
    setView(target.value);
    if (view === 'Favorites') {
      return setUserGames(favoriteGames);
    }
    setUserGames(games);
  };

  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 50%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 120%)',
      }}>
      <Header />
      <Typography
        variant='h4'
        mt={3}
        align='center'
        sx={{ fontFamily: 'Righteous' }}>
        Games in Library:
      </Typography>
      <Toolbar
        sx={{
          mx: mobile ? 2 : 15,
          mt: mobile ? 1.5 : 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <ToggleButtonGroup value={view} exclusive onChange={handleViewChange}>
          <ToggleButton value='All'>All</ToggleButton>
          <ToggleButton value='Favorites'>Favorites</ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
      <hr style={{ maxWidth: '78vW' }} />
      {userGames.length ? (
        <Paper
          sx={{
            height: '58.6vH',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <GamesList games={userGames} mobile={mobile} />
        </Paper>
      ) : (
        <Paper
          sx={{
            height: '58.6vH',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
          }}>
          <Typography
            sx={{ mx: 'auto', mb: 5 }}
            variant='h4'
            fontFamily='Righteous'>
            No games here yet! 😕
          </Typography>
        </Paper>
      )}
      <Footer />
    </Paper>
  );
}

export default Library;
