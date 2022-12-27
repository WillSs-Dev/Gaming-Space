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
import { fiveGames } from '../api/mock-responses';
import getIcon from '../utils/icons';
const { results } = fiveGames;

function Slider() {
  const theme = useTheme();
  const { palette } = theme;
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Paper sx={{ p: 3, m: 'auto', borderRadius: '15px' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination
        loop>
        {results.map((game) => (
          <SwiperSlide key={game.id}>
            <Card
              sx={{
                display: mobile ? 'block' : 'flex',
                px: 5,
                justifyContent: 'space-evenly',
              }}>
              <CardMedia
                component='img'
                sx={{
                  maxWidth: mobile ? 800 : 600,
                  maxHeight: 300,
                  minHeight: 300,
                  borderRadius: '15px',
                }}
                alt={game.name}
                image={game.background_image}
              />
              <Box>
                <CardContent sx={{ p: 2 }}>
                  <Typography variant='h4' color={palette.text.primary}>
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
                  <Typography
                    variant='h5'
                    color='palette.text.primary'
                    sx={{ mt: 1 }}>
                    Genres
                  </Typography>
                  <Grid container>
                    {game.genres.map((genre) => (
                      <Grid item key={genre.id}>
                        <Chip label={genre.name} sx={{ pl: 0.5, m: 0.5 }} />
                      </Grid>
                    ))}
                  </Grid>
                  <Typography
                    variant='h5'
                    color='palette.text.primary'
                    sx={{ mt: 1 }}>
                    Released on:
                  </Typography>
                  <Grid container spacing={1}>
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
