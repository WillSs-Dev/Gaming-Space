import { Header, SearchBar, Hero, GamesList, Footer } from '../components/';
// import { thirtyGames as games } from '../api/mock-responses';
import React, { useEffect, useState } from 'react';
import { Paper, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { requestNewGames, selectGamesInCatalog } from '../redux/reducers/catalogSlice';

export default function Home() {
  const [showSlider, setShowSlider] = useState(true);
  const { catalog: { games } } = useSelector(selectGamesInCatalog);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestNewGames(1));
  }, []);
  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-180deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 15%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 100%)',
      }}>
      <Header />
      <SearchBar viewSlider={setShowSlider} />
      <Hero showSlider={showSlider} />
      { games.length ? <GamesList games={games} mobile={mobile} /> : '' }
      <Footer />
    </Paper>
  );
}
