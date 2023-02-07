import { StarBorderOutlined } from '@mui/icons-material';
import { Grid, Paper, Rating, TextField, Typography } from '@mui/material';
import React from 'react';

function ReviewsList({ reviews, mobile }) {
  return (
    <Grid container spacing={mobile ? 2 : 1} sx={{ p: 3, borderRadius: 5 }} justifyContent='center'>
      {reviews.map((review) => (
        <Grid
          item
          key={review.reviewerName + '/' + review.gameName}
          xs={mobile ? 12 : 0}
          sx={{m: 'auto'}}
          >
          <Paper
            sx={{
              backgroundColor: '#05101C',
              display: 'flex',
              flexDirection: mobile ? 'column' : 'row', 
              p: 3,
              gap: 2,
              maxWidth: mobile ? '50vw' : '30vw',
            }}>
            <Paper
              sx={{
                py: 2,
                px: mobile ? 0 : 2,
                height: 'fit-content',
                borderRadius: 2,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}>
              <img
                src={review.backgroundImage}
                alt={review.gameName}
                width={150}
              />
              <Typography
                mt={1}
                sx={{ wordBreak: 'break-word' }}
                // maxWidth='50%'
                variant='h5'>
                {review.gameName}
              </Typography>
              <hr style={{ width: '80%' }} />
              <Typography variant='subtitle2'>{`${review.reviewerName}'s rating:`}</Typography>
              <Rating
                defaultValue={review.numericRating}
                emptyIcon={<StarBorderOutlined sx={{ color: '#f6f6f6' }} />}
                precision={0.5}
                readOnly
              />
              <Typography variant='subtitle1'>{review.finalRating}</Typography>
            </Paper>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'transparent',
                // maxWidth: '90%',
              }}>
              <Typography
                fontFamily='Righteous'
                variant='h6'
                textAlign='center'
                sx={{ mb: 1 }}>{`${review.reviewerName}'s review:`}</Typography>
              <TextField
                defaultValue={review.reviewDetails}
                InputProps={{ readOnly: true }}
                multiline
                fullWidth
              />
            </Paper>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default ReviewsList;
