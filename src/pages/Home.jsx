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
  requestNewGamesByCategory,
  selectGamesInCatalog,
} from '../redux/reducers/catalogSlice';
import { useNavigate } from 'react-router-dom';
import { selectCurrentView } from '../redux/reducers/viewSlice';

export default function Home() {
  const [showSlider, setShowSlider] = useState(true);
  const [pagination, setPagination] = useState(1);
  const [showPagination, setShowPagination] = useState(true);

  const { games } = useSelector(selectGamesInCatalog);
  const { view } = useSelector(selectCurrentView);

  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  useEffect(() => {
    const userIsLogged = JSON.parse(localStorage.getItem('login'));

    if (!userIsLogged) {
      return navigate('/login');
    }

    if (view === 'All') {
      dispatch(requestNewGames(pagination));
      return
    }

    dispatch(requestNewGamesByCategory(pagination, view))
  }, [pagination, dispatch, navigate, view]);

  const storedImages = localStorage.getItem('images');

  useEffect(() => {
    if (!storedImages) {
      const defaultImages = {
        profile:
          'https://play-lh.googleusercontent.com/coMv1dl31PCfEs6essJoEUwVryaqKHKQvENdZ_WYpN-PXa8Qfitkg3grQxIVN22W5A',
        background:
          'https://wallpapers.com/images/hd/widescreen-starry-night-sky-p7jj72xgabn10f13.jpg',
      };
      localStorage.setItem('images', JSON.stringify(defaultImages));
    }
  }, [storedImages]);

  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 50%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 120%)',
        display: 'flex',
        overflowX: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Header />
      <SearchBar
        setPagination={setPagination}
        viewSlider={setShowSlider}
        viewPagination={setShowPagination}
      />
      <Hero showSlider={showSlider} view={view}/>
      {games.length && showPagination ? (
        <Pagination
          count={99}
          page={pagination}
          siblingCount={1}
          boundaryCount={1}
          size={mobile ? 'medium' :'large'}
          shape='rounded'
          sx={{ backgroundColor: 'rgba(32,80,148,0.43)', borderRadius: 15 }}
          onChange={(__e, value) => {
            setPagination(value);
            setShowSlider(false);
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
      {showPagination ? (
        <Pagination
          count={99}
          page={pagination}
          siblingCount={1}
          boundaryCount={1}
          size={mobile ? 'medium' :'large'}
          shape='rounded'
          sx={{
            mb: games.length ? 3 : 24,
            backgroundColor: 'rgba(4,53,108,255)',
            borderRadius: 15,
          }}
          onChange={(__e, value) => {
            setPagination(value);
            setShowSlider(false);
          }}
        />
      ) : (
        ''
      )}
      <Footer />
    </Paper>
  );
}
