import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Header from '../components/Header.jsx';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Container sx={{ backgroundColor: 'red' }}>
        <Typography variant='h3'>Main page content</Typography>
      </Container>
    </>
  );
}
