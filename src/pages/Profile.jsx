import React, { useEffect, useState } from 'react';
import {
  Header,
  ProfileInfo,
  Footer,
  ReviewsList,
  GamesList,
} from '../components';
import { fiveGames } from '../api/mock-responses';
import { Paper, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { userReviews } from '../utils/mock-reviews.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGamesInLibrary } from '../redux/reducers/libraryReducer';

function Profile() {
  // const { results: gamesInLibrary } = fiveGames;
  const [gamesInLibrary, setGamesInLibrary] = useState([]);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { games } = useSelector(selectGamesInLibrary);

  useEffect(() => {
    const userIsLogged = JSON.parse(localStorage.getItem('login'));

    if (!userIsLogged) {
      return navigate('/login');
    }

    setGamesInLibrary(games);
  }, [navigate, games]);

  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 15%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 100%)',
      }}>
      <Header />
      <ProfileInfo mobile={mobile} />
      <Typography
        variant='h4'
        my={3}
        align='center'
        sx={{ fontFamily: 'Righteous' }}>
        Games in Library:
      </Typography>
      <hr style={{ maxWidth: '78vW' }} />
      {gamesInLibrary.length ? (
        <GamesList games={gamesInLibrary} />
      ) : (
        <Paper
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
          }}>
          <Typography
            sx={{ mx: 'auto', my: 4 }}
            variant='h5'
            fontFamily='Righteous'>
            No games here yet
          </Typography>
        </Paper>
      )}
      <hr style={{ maxWidth: '78vW' }} />
      <Typography variant='h4' align='center' sx={{ fontFamily: 'Righteous', mt: 5 }}>
        Your Reviews:
      </Typography>
      <ReviewsList mobile={mobile} reviews={userReviews} />
      <Footer />
    </Paper>
  );
}

export default Profile;
