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
    <Paper sx={{ p: 3, m: 'auto' }}>
      <Swiper
        modules={ [Navigation, Pagination]}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination
        loop>
        {results.map((game) => (
          <SwiperSlide key={game.id}>
            <Card sx={{ display: mobile ? 'block' : 'flex' }}>
              <CardMedia
                component='img'
                sx={{ maxWidth: mobile ? 800 : 600, maxHeight: 300, minHeight: 300 }}
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
                  {game.parent_platforms.map(({ platform }) => (
                    <Chip key={platform.id} label={platform.name} icon={<img alt={platform.name} src={getIcon[platform.name]} />} />
                  ))}
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
