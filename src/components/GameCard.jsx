import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Grid,
} from '@mui/material';
import React, { useState } from 'react';
import getIcon from '../utils/icons';

function GameCard({ game, mobile }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Card
      onMouseOver={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <CardMedia
        alt={game.name}
        image={game.background_image}
        component='img'
        sx={{
          maxWidth: mobile ? 200 : 350,
          minWidth: mobile ? 200 : 350,
          maxHeight: 270,
          minHeight: 270,
        }}
      />

      <CardContent
        sx={{
          maxWidth: mobile ? 180 : 350,
          minWidth: mobile ? 180 : 350,
          maxHeight: 200,
          minHeight: 200,
          opacity: showInfo ? 1 : 0,
          overflow: 'hidden',
          position: 'absolute',
          transform: showInfo ? 'translate(0, -100%)' : 'translate(0, -80%)',
          transition: 'all 0.4s ease-in',
        }}>
        <Typography variant='body1'>{game.name}</Typography>
        <Typography variant='body2'>Genres:</Typography>
        {game.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} />
        ))}
        <Typography variant='body2'>Platforms:</Typography>
        <Grid container spacing={0} direction='row'>
          {game.parent_platforms.map(({ platform }) => (
            <Grid item xs={mobile ? 6 : 4}>
              <Chip
                icon={<img alt={platform.name} src={getIcon[platform.name]} />}
                key={platform.id}
                label={platform.name}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default GameCard;
