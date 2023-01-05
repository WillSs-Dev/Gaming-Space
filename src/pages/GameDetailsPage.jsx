import { Paper, useMediaQuery } from '@mui/material';
import { Footer, Header, SearchBar, GameDetails } from '../components';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api';
import { useSelector } from 'react-redux';
import { selectCurrentGame } from '../redux/reducers/currentGameSlice';

function GameDetailsPage() {
  const [game, setGame] = useState();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const { id } = useParams();

  const currentGame = useSelector(selectCurrentGame);

  useEffect(() => {
    const storeGameWithFullInformations = async () => {
      const requestedGame = await getGameById(id);
      const fullObj = { ...requestedGame, ...currentGame.game };
      setGame(fullObj);
    };
    storeGameWithFullInformations();
  }, [currentGame, id]);

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
