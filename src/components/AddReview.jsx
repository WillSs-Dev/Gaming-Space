import {
  Done,
  FavoriteBorderOutlined,
  StarBorderOutlined,
} from '@mui/icons-material';
import {
  Avatar,
  Button,
  Dialog,
  FormControl,
  Input,
  Paper,
  Rating,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import getFinalRating from '../utils/reviews';

function AddReview({ mobile }) {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const images = JSON.parse(localStorage.getItem('images'));

  const handleSubmit = () => {
    if (!rate || !review) {
      setShowAlert(true);
    }
  };

  return (
    <Paper
      sx={{
        backgroundColor: '#05101C',
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        m: 2,
      }}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          gap: 2,
          alignItems: 'center',
          maxHeight: 200,
        }}>
        <Avatar
          src={images ? images.profile : null}
          sx={{ border: '3px solid #f6f6f6', width: 60, height: 60 }}>
          A
        </Avatar>
        <Paper>
          <Typography component='legend'>Your final rating:</Typography>
          <Rating
            value={rate}
            onChange={(__e, newValue) => setRate(newValue)}
            precision={0.5}
            emptyIcon={<StarBorderOutlined sx={{ color: '#f6f6f6' }} />}
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
        <Input
          multiline
          minRows={5}
          maxRows={15}
          placeholder='Add your review:'
          value={review}
          onChange={(__e, newValue) => setReview(newValue)}
          sx={{
            border: '1px solid #f6f6f6',
            p: 2,
            m: 1,
            borderRadius: '15px 15px 0 0',
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
