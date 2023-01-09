import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getStoresById } from '../api';
import translateStore from '../utils/storeNames';

function CTA({ game }) {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const getAllTheStores = async () => {
      const { results } = await getStoresById(game.id);
      setStores(results);
    };
    getAllTheStores();
  }, [game]);

  return (
    <Paper sx={{ mx: 8, textAlign: 'center', gap: 2, my: 2, backgroundColor: 'transparent' }}>
      <Typography variant='h5'>Play in:</Typography>
      <Grid container justifyContent='center'>
        {stores.map(({ id, url, store_id }) => (
          <Grid item key={id} m={1}>
            <Button variant='outlined'>
              <a href={url} target='__blank'>
                {translateStore[store_id]}
              </a>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default CTA;
