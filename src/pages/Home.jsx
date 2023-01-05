import { Header, SearchBar, Hero, GamesList, Footer } from '../components/';
import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Pagination,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestNewGames,
  selectGamesInCatalog,
} from '../redux/reducers/catalogSlice';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [showSlider, setShowSlider] = useState(true);
  const [pagination, setPagination] = useState(1);
  const navigate = useNavigate();

  const { games } = useSelector(selectGamesInCatalog);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  useEffect(() => {
    const userIsLogged = JSON.parse(localStorage.getItem('login'));

    if (!userIsLogged) {
      return navigate('/login');
    }

    dispatch(requestNewGames(pagination));
  }, [pagination, dispatch, navigate]);

  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 15%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Header />
      <SearchBar viewSlider={setShowSlider} />
      <Hero showSlider={showSlider} />
      {games.length ? (
        <Pagination
          count={99}
          page={pagination}
          siblingCount={1}
          boundaryCount={1}
          size={'large'}
          shape='rounded'
          sx={{ backgroundColor: 'rgba(32,80,148,0.43)', borderRadius: 15 }}
          onChange={({ target }) => {
            setPagination(Number(target.innerText));
          }}
        />
      ) : (
        ''
      )}
      {games.length ? (
        <GamesList games={games} mobile={mobile} />
      ) : (
        <CircularProgress sx={{ mb: 3 }} />
      )}
      <Pagination
        count={99}
        page={pagination}
        siblingCount={1}
        boundaryCount={1}
        size={'large'}
        shape='rounded'
        sx={{ mb: 3, backgroundColor: 'rgba(4,53,108,255)', borderRadius: 15 }}
        onChange={({ target }) => {
          setPagination(Number(target.innerText));
        }}
      />
      <Footer />
    </Paper>
  );
}
