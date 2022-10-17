import { Typography, Container } from '@mui/material';
import { Header, SearchBar } from '../components/';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <Container>
        <Typography variant='h3'>Main page content</Typography>
      </Container>
    </>
  );
}
