import React from 'react';
import { GameCard } from './';
import {
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

function GamesList({ games }) {
  
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box mt={3} pb={4}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        {games.map((game) => (
          <Grid item>
            <GameCard mobile={mobile} game={game}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GamesList;
