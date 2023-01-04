import { ArrowBack, Cancel, Save } from '@mui/icons-material';
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

function EditProfile({ setEditOpen, mobile }) {
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
    if (!profilePic && !backgroundPic) {
      return setShowAlert(true);
    }
    const storedImages = JSON.parse(localStorage.getItem('images'));
    const images = { profile: profilePic ? profilePic : storedImages.profile, background: backgroundPic ? backgroundPic : storedImages.background };
    localStorage.setItem('images', JSON.stringify(images));
    window.location.reload();
  };

  const resetImages = () => {
    localStorage.removeItem('images');
    window.location.reload();
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Dialog
        open={showAlert}
        onClick={() => setShowAlert(false)}
        sx={{ position: 'absolute', top: mobile ? 360 : 320 }}>
        <Typography
          variant='h4'
          position='relative'
          sx={{ fontFamily: 'Righteous', overflow: 'hidden' }}>
          You have to edit at least one field to save!
        </Typography>
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
        <Button variant='contained' color='secondary' onClick={resetImages}>
          Default <ArrowBack sx={{ ml: 1 }} />
        </Button>
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
