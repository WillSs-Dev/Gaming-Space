import { StarBorderOutlined } from '@mui/icons-material';
import { Grid, Paper, Rating, TextField, Typography } from '@mui/material';
import React from 'react';

function ReviewsList({ reviews, mobile }) {
  return (
    <Grid container spacing={mobile ? 2 : 1} sx={{ p: 3, borderRadius: 5 }}>
      {reviews.map((review) => (
        <Grid
          item
          key={review.reviewerName + '/' + review.gameName}
          xs={mobile ? 12 : 6}>
          <Paper
            sx={{ backgroundColor: '#05101C', display: 'flex', p: 3, gap: 2 }}>
            <Paper
              sx={{
                p: 1,
                height: 'fit-content',
                borderRadius: 2,
                textAlign: 'center',
              }}>
              <img
                src={review.backgroundImage}
                alt={review.gameName}
                width={150}
              />
              <Typography mt={1}>{review.gameName}</Typography>
              <hr style={{ width: '80%' }} />
              <Typography variant='subtitle2'>{`${review.reviewerName}'s rating:`}</Typography>
              <Rating
                defaultValue={review.numericRating}
                emptyIcon={ <StarBorderOutlined sx={{ color: '#f6f6f6' }} />}
                precision={0.5}
                readOnly
              />
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
