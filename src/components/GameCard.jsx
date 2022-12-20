import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import React from 'react';
import getIcon from '../utils/icons';

function GameCard({ game, mobile }) {
  return (
    <Card>
      <CardMedia
        alt={game.name}
        image={game.background_image}
        component='img'
        sx={{
          maxWidth: mobile ? 200 : 350,
          minWidth: mobile ? 200 : 350,
          maxHeight: 200,
          minHeight: 200,
        }}
      />
      <CardContent sx={{ p: 2 }}>
        <Typography variant='body1'>
          {game.name}
        </Typography>
        <Typography variant='body2'>
          Genres
        </Typography>
        {game.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} />
        ))}
        <br/>
        {game.parent_platforms.map(({ platform }) => (
          <Chip icon={<img src={getIcon[platform.name]}/>} key={platform.id} label={platform.name} />
        ))}
      </CardContent>
    </Card>
  );
}

export default GameCard;
