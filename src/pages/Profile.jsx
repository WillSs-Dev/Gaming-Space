import React, { useEffect } from 'react';
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

function Profile() {
  const { results: gamesInLibrary } = fiveGames;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  useEffect(() => {
    const userIsLogged = JSON.parse(localStorage.getItem('login'));

    if (!userIsLogged) {
      return navigate('/login');
    }

  }, [navigate]);

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
        mt={3}
        align='center'
        sx={{ fontFamily: 'Righteous' }}>
        Games in Library:
      </Typography>
      <GamesList games={gamesInLibrary} />
      <Typography variant='h4' align='center' sx={{ fontFamily: 'Righteous' }}>
        Your Reviews:
      </Typography>
      <ReviewsList mobile={mobile} reviews={userReviews} />
      <Footer />
    </Paper>
  );
}

export default Profile;
