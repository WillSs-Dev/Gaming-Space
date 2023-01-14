import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserReviews } from '../redux/reducers/reviewSlice';
import { AddReview, ReviewsList } from './';

function Reviews({ mobile, game }) {
  const [review, setReview] = useState();

  const { userReviews } = useSelector(selectUserReviews);

  useEffect(() => {
    const gameReview = userReviews.find(
      (userReview) => userReview.gameName === game.name
    );
    gameReview ? setReview([gameReview]) : setReview(undefined);
  }, [userReviews, game]);

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
      {review ? <ReviewsList mobile={mobile} reviews={review} /> : ''}
    </Paper>
  );
}

export default Reviews;
