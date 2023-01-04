import { Cancel, Save } from '@mui/icons-material';
import {
  Button,
  Dialog,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

function EditProfile({ setEditOpen }) {
  const [profilePic, setProfilePic] = useState('');
  const [backgroundPic, setBackgroundPic] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleBgChange = ({ target: { value } }) => {
    setBackgroundPic(value);
  };

  const handlePfPicChange = ({ target: { value } }) => {
    setProfilePic(value);
  };

  const handleForm = () => {
    if (!profilePic || !backgroundPic) {
      setShowAlert(true);
    }
    const images = { profile: profilePic, background: backgroundPic };
    localStorage.setItem('images', JSON.stringify(images));
    window.location.reload();
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Dialog open={showAlert} onClick={() => setShowAlert(false)}>
        One or more informations missing
      </Dialog>
      <Typography variant='h4' mb={2}>
        Edit your profile information:
      </Typography>
      <Paper sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <FormControl variant='outlined'>
          <InputLabel htmlFor='profile-pic'>Profile picture URL:</InputLabel>
          <OutlinedInput
            required
            label='Profile picture URL:'
            value={profilePic}
            onChange={handlePfPicChange}
            id='profile-pic'
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='background-pic'>
            Background picture URL:
          </InputLabel>
          <OutlinedInput
            required
            label='Background picture URL:'
            value={backgroundPic}
            onChange={handleBgChange}
            id='background-pic'
          />
        </FormControl>
      </Paper>
      <Paper sx={{ display: 'flex', mt: 2, justifyContent: 'space-evenly' }}>
        <Button
          variant='contained'
          onClick={() => setEditOpen(false)}
          color='error'>
          Cancel <Cancel sx={{ ml: 1 }} />
        </Button>
        <Button variant='contained' onClick={handleForm}>
          Save <Save sx={{ ml: 1 }} />
        </Button>
      </Paper>
    </Paper>
  );
}

export default EditProfile;
