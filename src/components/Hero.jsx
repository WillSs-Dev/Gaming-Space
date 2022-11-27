import {
  Container,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Paper,
  Box,
  useTheme,
} from '@mui/material';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';

import { fiveGames } from '../api/mock-responses';
const { results } = fiveGames;

function Hero() {

  const { palette } = useTheme();

  return (
    <Container sx={{ py: 1 }}>
      <Typography
        variant='h2'
        sx={{ fontFamily: '"Righteous", sans-serif', textAlign: 'center', mb: 2 }}>
        Gaming Space
      </Typography>
      <Paper sx={{ width: '90vW', p: 5, m: 'auto' }}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination>
          {results.map((game) => (
            <SwiperSlide key={game.id}>
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component='img'
                  height={500}
                  alt={game.name}
                  image={game.background_image}
                />
              <Box>
                <CardContent>
                  <Typography variant='body2' color={palette.text.primary}>
                    {game.name}
                  </Typography>
                </CardContent>
              </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Paper>
    </Container>
  );
}

export default Hero;
