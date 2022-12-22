import React from 'react';
import { thirtyGames } from '../api/mock-responses';
import { GameCard } from './';
import {
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

function GamesList() {
  const { results } = thirtyGames;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box mt={3} pb={10}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        {results.map((game) => (
          <Grid item>
            <GameCard mobile={mobile} game={game}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GamesList;
