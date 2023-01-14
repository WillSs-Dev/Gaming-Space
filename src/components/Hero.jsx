import { Container, Typography } from '@mui/material';
import React from 'react';
import { Slider } from './';

function Hero({ showSlider, view }) {
  return (
    <Container sx={{ py: 1, mb: 1.5 }}>
      <Typography
        variant='h4'
        align='center'
        sx={{
          fontFamily: '"Righteous", sans-serif',
          mb: showSlider ? 2 : 0,
          mt: showSlider ? 1 : 2,
        }}>
        {showSlider ? 'Recommended for you:' : `${view} games`}
      </Typography>
      {showSlider ? <Slider /> : ''}
    </Container>
  );
}

export default Hero;
