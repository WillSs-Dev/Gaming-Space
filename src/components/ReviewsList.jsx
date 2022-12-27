import { Grid, Paper, Rating, TextField, Typography } from '@mui/material';
import React from 'react';

function ReviewsList({ reviews }) {
  return (
    <Grid container spacing={2} sx={{ p: 3, borderRadius: 5 }}>
      {reviews.map((review) => (
        <Grid item key={review.reviewerName + '/' + review.gameName} xs={12}>
          <Paper sx={{ backgroundColor: '#05101C', display: 'flex', p: 3, gap: 2 }}>
            <Paper sx={{ p: 1, height: 'fit-content', borderRadius: 2, textAlign: 'center' }}>
              <img
                src={review.backgroundImage}
                alt={review.gameName}
                width={150}
              />
              <Typography mt={1}>{review.gameName}</Typography>
              <hr style={{ width: '80%' }}/>
              <Typography variant='subtitle2'>{`${review.reviewerName}'s rating:`}</Typography>
              <Rating defaultValue={review.numericRating} precision={0.5} readOnly/>
              <Typography variant='subtitle1'>{review.finalRating}</Typography>
            </Paper>
            <TextField
              defaultValue={review.reviewDetails}
              InputProps={{ readOnly: true }}
              multiline
              fullWidth
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default ReviewsList;
