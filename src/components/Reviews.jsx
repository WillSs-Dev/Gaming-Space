import { Paper } from '@mui/material';
import React from 'react'
import { AddReview } from './';

function Reviews({mobile, game}) {
  return (
    <Paper sx={{ backgroundColor: 'transparent' }}>
      <AddReview mobile={mobile} game={game} />
    </Paper>
  )
}

export default Reviews;
