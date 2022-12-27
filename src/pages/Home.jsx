import { Header, SearchBar, Hero, GamesList, Footer } from '../components/';
import { thirtyGames } from '../api/mock-responses';
import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Home() {
  const [showSlider, setShowSlider] = useState(true);
  const { results } = thirtyGames;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Header />
      <SearchBar viewSlider={setShowSlider} />
      <Hero showSlider={showSlider} />
      <GamesList games={ results } mobile={ mobile } />
      <Footer />
    </>
  );
}
