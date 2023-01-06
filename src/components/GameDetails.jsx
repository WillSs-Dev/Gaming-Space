import {
  Avatar,
  Card,
  CardMedia,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import getIcon from '../utils/icons';
import CTA from './CTA';

function GameDetails({ game, mobile }) {
  const [pcRequirements, setPcRequirements] = useState('');

  useEffect(() => {
    const requirements = game.platforms.find(
      ({ platform }) => platform.name === 'PC'
    ).requirements;
    setPcRequirements(requirements);
  }, [game]);

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
          {game.screenshots.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <Card>
                <CardMedia
                  component='img'
                  alt={`${game.name} screenshot ${index}`}
                  image={slide.image}
                  sx={{
                    maxWidth: mobile ? 800 : 700,
                    maxHeight: 350,
                    minHeight: 350,
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
      <CTA game={game} />
      <hr style={{ width: '90vW' }} />
      <Paper
        sx={{ p: 2, display: mobile ? 'block' : 'flex', ml: mobile ? 2 : 6 }}>
        <Paper sx={{ maxWidth: mobile ? '100vW' : '40vW' }}>
          <Typography
            variant='h5'
            color='palette.text.primary'
            fontFamily='Righteous'
            sx={{ mt: 1 }}>
            Description
          </Typography>
          <Paper dangerouslySetInnerHTML={{ __html: game.description }} />
        </Paper>
        <Paper sx={{ ml: mobile ? 0 : 6 }}>
          <Typography
            variant='h5'
            color='palette.text.primary'
            fontFamily='Righteous'
            sx={{ mt: 1 }}>
            Platforms
          </Typography>
          <List sx={{ ml: -1.5, maxWidth: 'fit-content' }}>
            {game.platforms.map(({ platform }) => (
              <ListItem key={platform.id}>
                <ListItemText>{platform.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper sx={{ ml: mobile ? 0 : 6, maxWidth: mobile ? '90vW' : '30vW' }}>
          <Typography
            variant='h5'
            color='palette.text.primary'
            fontFamily='Righteous'
            sx={{ mt: 1 }}>
            PC Requirements
          </Typography>
          <Paper
            sx={{ mt: 2 }}
            dangerouslySetInnerHTML={{ __html: pcRequirements.minimum }}
          />
          <Paper
            sx={{ mt: 2 }}
            dangerouslySetInnerHTML={{ __html: pcRequirements.recommended }}
          />
        </Paper>
      </Paper>
    </>
  );
}

export default GameDetails;
