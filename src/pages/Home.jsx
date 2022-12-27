import { Header, SearchBar, Hero, GamesList, Footer } from '../components/';
import { thirtyGames } from '../api/mock-responses';
import React, { useState } from 'react';
import { Paper, useMediaQuery, useTheme } from '@mui/material';

export default function Home() {
  const [showSlider, setShowSlider] = useState(true);
  const { results } = thirtyGames;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-180deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 15%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 100%)',
      }}>
      <Header />
      <SearchBar viewSlider={setShowSlider} />
      <Hero showSlider={showSlider} />
      <GamesList games={results} mobile={mobile} />
      <Footer />
    </Paper>
  );
}
