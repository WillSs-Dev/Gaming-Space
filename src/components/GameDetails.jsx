import { Card, CardMedia, Paper } from '@mui/material';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function GameDetails({ game, mobile }) {
  return (
    <Paper>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination
        loop>
        {game.short_screenshots.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Card>
              <CardMedia
                component='img'
                alt={`${game.name} screenshot ${index}`}
                image={slide.image}
                sx={{
                  maxWidth: mobile ? 800 : 600,
                  maxHeight: 300,
                  minHeight: 300,
                  borderRadius: '15px',
                }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Paper>
  );
}

export default GameDetails;
