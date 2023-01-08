import { LoginTwoTone } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleUsername = ({ target: { value } }) => {
    setUsername(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleLogin = () => {
    if (!username || !password) {
      return setShowAlert(true);
    }

    const loginInfo = JSON.stringify({ username, usertag: `@th3${username}_g4meR` });
    localStorage.setItem('login', loginInfo);

    navigate('/store');
  };

  return (
    <Paper
      sx={{
        minHeight: '100vH',
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 20%, rgba(11,15,46,1) 35%, rgba(20,28,93,1) 55%, rgba(2,106,208,1) 100%)',
      }}>
      <Box
        maxWidth={mobile ? '100vW' : '35vW'}
        minHeight='100vH'
        flexDirection='column'
        sx={{
          display: 'flex',
          gap: 2.5,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080927',
        }}>
        <Dialog open={showAlert} onClick={() => setShowAlert(false)}>
          <Typography
            variant='h5'
            position='relative'
            sx={{ fontFamily: 'Righteous', overflow: 'hidden' }}>
            You have to fill every field to proceed
          </Typography>
        </Dialog>
        <Typography variant='h4' fontFamily='Righteous'>
          Login
        </Typography>
        <FormControl sx={{ maxWidth: '45vW' }}>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <OutlinedInput
            required
            label='Username:'
            id='username'
            value={username}
            onChange={handleUsername}
          />
        </FormControl>
        <FormControl sx={{ maxWidth: '45vW' }}>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <OutlinedInput
            required
            label='Password:'
            type='password'
            id='password'
            value={password}
            onChange={handlePassword}
          />
        </FormControl>
        <Button variant='contained' onClick={handleLogin}>
          Login <LoginTwoTone sx={{ ml: 1 }} />
        </Button>
      </Box>
    </Paper>
  );
}

export default Login;
