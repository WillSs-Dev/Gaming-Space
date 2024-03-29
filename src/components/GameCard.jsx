import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Grid,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import getIcon from '../utils/icons';

function GameCard({ game, mobile }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Link to={`/games/${game.id}`}>
      <Card
        onMouseOver={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}>
        <CardMedia
          alt={game.name}
          image={game.background_image}
          component='img'
          sx={{
            maxWidth: mobile ? 200 : 350,
            minWidth: mobile ? 200 : 350,
            maxHeight: 270,
            minHeight: 270,
            filter: showInfo ? 'blur(4px)' : '0',
            transition: 'all 0.8s ease-in-out',
          }}
        />

        <CardContent
          sx={{
            maxWidth: mobile ? 169 : 318,
            minWidth: mobile ? 169 : 318,
            maxHeight: 200,
            minHeight: 200,
            opacity: showInfo ? 1 : 0,
            position: 'absolute',
            overflow: 'hidden',
            transform: showInfo ? 'translate(0, -100%)' : 'translate(0, -80%)',
            transition: 'all 0.4s ease-in-out',
            backgroundColor: 'rgba(5, 16, 28, 0.720)',
          }}>
          <Typography variant='body1'>{game.name}</Typography>
          <Typography variant='body2'>Genres:</Typography>
          {game.genres.map((genre) => (
            <Chip key={genre.id} label={genre.name} sx={{ pl: 0.5, m: 0.5 }} />
          ))}
          <Typography variant='body2'>Platforms:</Typography>
          <Grid container spacing={0} direction='row'>
            {game.parent_platforms?.map(({ platform }) => (
              <Grid item key={platform.id}>
                <Chip
                  sx={{ pl: 0.5, m: 0.5 }}
                  icon={
                    <img alt={platform.name} src={getIcon[platform.name]} />
                  }
                  label={platform.name}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}

export default GameCard;
