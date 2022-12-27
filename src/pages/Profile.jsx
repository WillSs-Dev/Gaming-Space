import React from 'react';
import { Header, ProfileInfo, Footer, ReviewsList, GamesList } from '../components';
import { fiveGames } from '../api/mock-responses';
import { Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { userReviews } from '../utils/mock-reviews.js';

function Profile() {
  const { results: gamesInLibrary } = fiveGames;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
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
      <Typography
        variant='h4'
        align='center'
        sx={{ fontFamily: 'Righteous' }}>
        Your Reviews:
      </Typography>
      <ReviewsList reviews={ userReviews }/>
      <Footer />
    </>
  );
}

export default Profile;
