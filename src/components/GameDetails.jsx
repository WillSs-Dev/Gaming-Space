import {
  Avatar,
  Card,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import getIcon from '../utils/icons';

function GameDetails({ game, mobile }) {
  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: mobile ? 'column' : 'row',
          my: 3,
          maxWidth: '80vW',
          mx: 'auto',
        }}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination
          style={{ maxWidth: mobile ? '70vW' : '50vW' }}
          loop>
          {game.short_screenshots.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <Card>
                <CardMedia
                  component='img'
                  alt={`${game.name} screenshot ${index}`}
                  image={slide.image}
                  sx={{
                    maxWidth: mobile ? 800 : 700,
                    maxHeight: 300,
                    minHeight: 300,
                    borderRadius: '15px',
                  }}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <Paper
          sx={{
            mt: mobile ? 2 : 0,
            p: 2,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography variant='h5' fontFamily='Righteous'>
            {game.name}
          </Typography>
          <Typography variant='body1' color='palette.text.primary'>
            Release date: {game.released}
          </Typography>
          <Chip
            sx={{ mt: 1 }}
            avatar={<Avatar>R</Avatar>}
            label={`Rating: ${game.rating}`}
          />
          <Typography variant='h5' color='palette.text.primary' sx={{ mt: 1 }}>
            Genres
          </Typography>
          <Grid container justifyContent='center'>
            {game.genres.map((genre) => (
              <Grid item key={genre.id}>
                <Chip label={genre.name} sx={{ pl: 0.5, m: 0.5 }} />
              </Grid>
            ))}
          </Grid>
          <Typography variant='h5' color='palette.text.primary' sx={{ mt: 1 }}>
            Released on:
          </Typography>
          <Grid container spacing={1} justifyContent='center'>
            {game.parent_platforms.map(({ platform }) => (
              <Grid item key={platform.id}>
                <Chip
                  label={platform.name}
                  icon={
                    <img
                      alt={platform.name}
                      src={getIcon[platform.name]}
                      sx={{ pl: 0.5, m: 0.5 }}
                    />
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Paper>
      <hr style={{ width: '90vW' }} />
    </>
  );
}

export default GameDetails;
