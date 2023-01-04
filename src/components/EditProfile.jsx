import { FormControl, OutlinedInput, Paper, Typography } from '@mui/material';
import React from 'react';

function EditProfile() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant='h5'>Edit your profile information:</Typography>
      <FormControl>
        <OutlinedInput type='text' />
      </FormControl>
    </Paper>
  );
}

export default EditProfile;
