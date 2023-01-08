import React from 'react';
import { GameCard } from './';
import { Grid, Box } from '@mui/material';

function GamesList({ games, mobile }) {
  return (
    <Box mt={3} pb={4}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}>
        {games.map((game) => (
          <Grid item key={game.id}>
            <GameCard mobile={mobile} game={game} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GamesList;
