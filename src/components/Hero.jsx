import {
  Container,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Paper,
  Box,
  useTheme,
  Chip,
  Avatar,
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
        variant='h4'
        sx={{
          fontFamily: '"Righteous", sans-serif',
          textAlign: 'center',
          mb: 2,
          mt: 1,
        }}>
        Popular now
      </Typography>
      <Paper sx={{ width: '90vW', p: 5, m: 'auto' }}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination
          loop>
          {results.map((game) => (
            <SwiperSlide key={game.id}>
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component='img'
                  sx={{ width: 600, heigth: 300, objectFit: 'cover' }}
                  alt={game.name}
                  image={game.background_image}
                />
                <Box>
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant='h5' color={palette.text.primary}>
                      {game.name}
                    </Typography>
                    <Typography variant='body1' color='palette.text.primary'>
                      Release date: {game.released}
                    </Typography>
                    <Chip
                      avatar={<Avatar>R</Avatar>}
                      label={`Rating: ${game.rating}`}
                    />
                    <Typography variant='body1' color='palette.text.primary'>
                      Genres
                    </Typography>
                    {game.genres.map((genre) => (
                      <Chip key={genre.id} label={genre.name} />
                    ))}
                    <Typography variant='body1' color='palette.text.primary'>
                      Released on:
                    </Typography>
                    {game.parent_platforms.map(({platform}) => (
                      <Chip key={platform.id} label={platform.name} />
                    ))}
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
