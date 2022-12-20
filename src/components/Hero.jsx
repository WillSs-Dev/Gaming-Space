import {
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import { Slider } from './';

function Hero() {

  return (
    <Container sx={{ py: 1 }}>
      <Typography
        variant='h4'
        sx={{
          fontFamily: '"Righteous", sans-serif',
          textAlign: 'center',
          mb: 2,
          mt: 1,
        }}>
        Popular now
      </Typography>
      <Slider />
    </Container>
  );
}

export default Hero;
