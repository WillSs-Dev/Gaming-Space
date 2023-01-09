import { CircularProgress, Paper, useMediaQuery } from '@mui/material';
import { Footer, Header, GameDetails, Reviews } from '../components';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getGameById, getGameScreenshots } from '../api';

function GameDetailsPage() {
  const [game, setGame] = useState();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const { id } = useParams();

  useEffect(() => {
    const storeGameWithFullInformations = async () => {
      const requestedGame = await getGameById(id);
      const { results } = await getGameScreenshots(requestedGame.slug);
      const fullObj = { ...requestedGame, screenshots: results };
      setGame(fullObj);
    };
    storeGameWithFullInformations();
  }, [id]);

  return (
    <Paper
      sx={{
        minHeight: '100vH',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 50%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 120%)',
      }}>
      <Header />
      {game ? (
        <GameDetails game={game} mobile={mobile} />
      ) : (
        <CircularProgress sx={{ m: 'auto' }} />
      )}
      {game ? <Reviews mobile={mobile} game={game} /> : ''}
      <Footer />
    </Paper>
  );
}

export default GameDetailsPage;
