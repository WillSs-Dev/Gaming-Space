import { Paper, useMediaQuery } from '@mui/material';
import { Footer, Header, SearchBar, GameDetails } from '../components';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api';

function GameDetailsPage() {
  const [game, setGame] = useState();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const { id } = useParams();

  useEffect(async () => {
    // const game = await getGameById(id);
    setGame(game);
  }, []);

  return (
    <Paper>
      <Header />
      <SearchBar />
      {game ? <GameDetails game={game} mobile={mobile} /> : ''}
      <Footer />
    </Paper>
  );
}

export default GameDetailsPage;
