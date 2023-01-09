import { Paper } from '@mui/material';
import React from 'react'
import { AddReview } from './';

function Reviews({mobile}) {
  return (
    <Paper sx={{ backgroundColor: 'transparent' }}>
      <AddReview mobile={mobile} />
    </Paper>
  )
}

export default Reviews;
