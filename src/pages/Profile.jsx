import React from 'react'
import { Header, ProfileInfo, Footer, GamesList } from '../components';
import { fiveGames } from '../api/mock-responses';
import { Typography } from '@mui/material';

function Profile() {
  const { results: gamesInLibrary } = fiveGames;
  return (
    <>
      <Header />
      <ProfileInfo />
      <Typography variant='h4' mt={ 3 } sx={{ textAlign: 'center', fontFamily: 'Righteous' }}>Games in Library:</Typography>
      <GamesList games={ gamesInLibrary }/>
      <Footer />
    </>
  )
}

export default Profile;
