import {
  CardMedia,
  Typography,
  Card,
  CardContent,
  Paper,
  Box,
  useTheme,
  Chip,
  Avatar,
  useMediaQuery,
  Grid,
} from '@mui/material';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import getIcon from '../utils/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGamesInCatalog } from '../redux/reducers/catalogSlice';
import { useEffect, useState } from 'react';

function Slider() {
  const [slides, setSlides] = useState([]);

  const theme = useTheme();
  const { palette } = theme;
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const { games } = useSelector(selectGamesInCatalog);

  useEffect(() => {
    const fiveGames = games.slice(10, 15);
    setSlides(fiveGames);
  }, [games]);

  return (
    <Paper
      sx={{
        p: 2,
        m: 'auto',
        borderRadius: '15px',
        maxWidth: mobile ? '85vW' : '80vW',
      }}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        style={{ minHeight: '30vH' }}
        navigation={{ clickable: true }}
        pagination
        loop>
        {slides.map((game) => (
          <SwiperSlide key={game.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: mobile ? 'column' : 'row',
                px: 5,
                py: mobile ? 1 : 3,
                justifyContent: 'space-evenly',
              }}>
              <Link to={`/games/${game.id}`}>
                <CardMedia
                  component='img'
                  sx={{
                    maxWidth: mobile ? 1000 : 700,
                    maxHeight: mobile ? 200 : 350,
                    minHeight: mobile ? 200 : 350,
                    borderRadius: '15px',
                  }}
                  alt={game.name}
                  image={game.background_image}
                />
              </Link>
              <Box>
                <CardContent sx={{ p: 2, textAlign: 'center' }}>
                  <Link to={`/games/${game.id}`}>
                    <Typography variant='h5' color={palette.text.primary}>
                      {game.name}
                    </Typography>
                  </Link>
                  <Typography variant='body2' color='palette.text.primary'>
                    Release date: {game.released}
                  </Typography>
                  <Chip
                    sx={{ mt: 1 }}
                    avatar={<Avatar>R</Avatar>}
                    label={`Rating: ${game.rating}`}
                  />
                  <Typography
                    variant='h6'
                    color='palette.text.primary'
                    sx={{ mt: 1 }}>
                    Genres
                  </Typography>
                  <Grid container justifyContent='center'>
                    {game.genres.map((genre) => (
                      <Grid item key={genre.id}>
                        <Chip label={genre.name} sx={{ pl: 0.5, m: 0.5 }} />
                      </Grid>
                    ))}
                  </Grid>
                  <Typography
                    variant='h6'
                    color='palette.text.primary'
                    sx={{ mt: 1 }}>
                    Released on:
                  </Typography>
                  <Grid container spacing={1} justifyContent='center'>
                    {game.parent_platforms?.map(({ platform }) => (
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
                </CardContent>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Paper>
  );
}

export default Slider;
