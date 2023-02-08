import { Edit } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Dialog,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { EditProfile } from './';

function ProfileInfo({ mobile }) {
  const [images, setImages] = useState();
  const [editOpen, setEditOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [usertag, setUsertag] = useState('');
  const { palette } = useTheme();

  const {
    background: { paper },
  } = palette;

  const storedImages = localStorage.getItem('images');

  useEffect(() => {
    setImages(JSON.parse(storedImages));
  }, [storedImages]);

  const loginInfo = JSON.parse(localStorage.getItem('login'));

  useEffect(() => {
    setUsername(loginInfo.username);
    setUsertag(loginInfo.usertag);
  }, [loginInfo]);

  const openBackdrop = () => {
    setEditOpen(true);
  };

  return (
    <Paper>
      <Paper style={{ maxHeight: 200, overflow: 'hidden' }}>
        <img
          src={images ? images.background : ''}
          alt='user wallpaper'
          width='100%'
        />
      </Paper>

      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          maxHeight: 80,
        }}>
        {/* {PROFILE PICTURE AND NAME} */}
        <Paper sx={{ display: 'flex', backgroundColor: 'transparent' }}>
          <Button
            size='large'
            sx={{
              transform: 'translate(0, -40%)',
              p: 1,
              ml: mobile ? 0 : 15,
            }}>
            <Avatar
              src={images ? images.profile : ''}
              sx={{ width: 100, height: 100, border: `6px solid ${paper}` }}
            />
            <Paper
              style={{
                backgroundColor: 'green',
                position: 'absolute',
                width: 15,
                height: 15,
                overflow: 'hidden',
                borderRadius: '50%',
                color: 'green',
                border: `3px solid ${paper}`,
                bottom: 16,
                right: 16,
              }}>
              Online
            </Paper>
          </Button>
          <Paper sx={{ py: 0.5, backgroundColor: 'transparent' }}>
            <Typography variant='h5'>{username}</Typography>
            <Typography variant='subtitle2' mt={-0.5}>
              {usertag}
            </Typography>
          </Paper>
        </Paper>
        {/* {EDIT} */}
        <Paper
          sx={{
            mr: mobile ? 2.5 : 15,
            py: 2,
            display: 'flex',
            alignItems: 'center',
          }}>
          <IconButton sx={{ gap: 1 }} onClick={openBackdrop}>
            {!mobile && <Typography variant='subtitle1'>Edit profile</Typography>}
            <Edit />
          </IconButton>
          <Dialog open={editOpen}>
            <EditProfile setEditOpen={setEditOpen} mobile={mobile} />
          </Dialog>
        </Paper>
      </Paper>
    </Paper>
  );
}

export default ProfileInfo;
