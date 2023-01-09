import { Paper } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserReviews } from '../redux/reducers/reviewSlice';
import { AddReview, ReviewsList } from './';

function Reviews({ mobile, game }) {
  const { userReviews } = useSelector(selectUserReviews);

  return (
    <Paper
      sx={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      {userReviews.some((userReview) => userReview.gameName === game.name) ? (
        ''
      ) : (
        <AddReview mobile={mobile} game={game} userReviews={userReviews} />
      )}
      <ReviewsList mobile={mobile} reviews={userReviews} />
    </Paper>
  );
}

export default Reviews;
