import { Container, Typography } from '@mui/material';
import React from 'react';
import { Slider } from './';

function Hero({ showSlider }) {
  return (
    <Container sx={{ py: 1 }}>
      <Typography
        variant='h4'
        sx={{
          fontFamily: '"Righteous", sans-serif',
          textAlign: 'center',
          mb: showSlider ? 2 : 0,
          mt: showSlider ? 1 : 2,
        }}>
        {showSlider ? 'Popular now' : 'All games'}
      </Typography>
      {showSlider ? <Slider /> : ''}
    </Container>
  );
}

export default Hero;
