import {
  Done,
  StarBorderOutlined,
} from '@mui/icons-material';
import {
  Avatar,
  Button,
  Dialog,
  FormControl,
  OutlinedInput,
  Paper,
  Rating,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/reducers/reviewSlice';
import getFinalRating from '../utils/reviews';

function AddReview({ mobile, game, userReviews }) {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const images = JSON.parse(localStorage.getItem('images'));
  const loginInfo = JSON.parse(localStorage.getItem('login'));
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!rate || !review) {
      return setShowAlert(true);
    }

    const reviewObj = {
      id: userReviews.length ? userReviews[userReviews.length - 1].id + 1 : 0,
      gameName: game.name,
      backgroundImage: game.background_image,
      reviewerName: loginInfo.username,
      finalRating: getFinalRating[rate],
      numericRating: rate,
      reviewDetails: review,
    }

    dispatch(addReview(reviewObj));
  };

  return (
    <Paper
      sx={{
        backgroundColor: '#05101C',
        p: 3,
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        maxWidth: 'fit-content',
        gap: 1,
        m: 2,
      }}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: mobile ? 'row' : 'column',
          p: 2,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          borderRadius: 5
        }}>
        <Avatar
          src={images ? images.profile : null}
          sx={{ border: '3px solid #f6f6f6', width: mobile ? 80 : 60, height: mobile ? 80 : 60 }}>
          A
        </Avatar>
        <Paper sx={{ textAlign: 'center' }}>
          <Typography component='legend' sx={{fontSize: mobile ? '1.5rem' : '1.2rem'}}>Your final rating:</Typography>
          <Rating
            value={rate}
            onChange={(__e, newValue) => setRate(newValue)}
            precision={0.5}
            size='large'
            emptyIcon={<StarBorderOutlined fontSize='madium' sx={{ color: '#f6f6f6' }} />}
          />
          {rate ? <hr /> : ''}
          {rate ? (
            <Typography textAlign='center'>{getFinalRating[rate]}</Typography>
          ) : (
            ''
          )}
        </Paper>
      </Paper>
      <FormControl>
        <Dialog
          open={showAlert}
          onClick={() => setShowAlert(false)}
          >
          <Typography
            variant='h4'
            position='relative'
            sx={{ fontFamily: 'Righteous', overflow: 'hidden', textAlign: 'center' }}>
            You have to add your review and your rating
          </Typography>
        </Dialog>
        <OutlinedInput
          multiline
          minRows={5}
          maxRows={15}
          placeholder='Add your review:'
          value={review}
          onChange={(e) => setReview(e.target.value)}
          sx={{
            p: 2,
            m: 1,
            width: mobile ? '50vW' : '30vw',
          }}
        />
        <Button
          variant='contained'
          sx={{ width: 250, m: 'auto' }}
          onClick={handleSubmit}>
          Submit Review <Done sx={{ ml: 1 }} />
        </Button>
      </FormControl>
    </Paper>
  );
}

export default AddReview;
