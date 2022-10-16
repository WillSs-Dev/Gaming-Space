import { Typography, Container } from '@mui/material';
import Header from '../components/Header.jsx';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Typography variant='h3'>Main page content</Typography>
      </Container>
    </>
  );
}
