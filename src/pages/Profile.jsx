import React from 'react';
import { Header, ProfileInfo, Footer, ReviewsList, GamesList } from '../components';
import { fiveGames } from '../api/mock-responses';
import { Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

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
        sx={{ textAlign: 'center', fontFamily: 'Righteous' }}>
        Games in Library:
      </Typography>
      <GamesList games={gamesInLibrary} />
      <Typography
        variant='h4'
        mt={3}
        sx={{ textAlign: 'center', fontFamily: 'Righteous' }}>
        Your Reviews:
      </Typography>
      <ReviewsList />
      <Footer />
    </>
  );
}

export default Profile;
