import {
  Paper,
  useMediaQuery,
  useTheme,
  Typography,
  Toolbar,
  ToggleButton,
  ToggleButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Header, Footer, GamesList } from '../components';
import { categories } from '../api/mock-responses';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGamesInLibrary } from '../redux/reducers/libraryReducer';
import { selectFavoriteGames } from '../redux/reducers/favoriteReducer';

function Library() {
  const [view, setView] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [userGames, setUserGames] = useState([]);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { games } = useSelector(selectGamesInLibrary);
  const { favoriteGames } = useSelector(selectFavoriteGames);

  useEffect(() => {
    const userIsLogged = JSON.parse(localStorage.getItem('login'));

    if (!userIsLogged) {
      return navigate('/login');
    }

    if (view === 'Favorites') {
      return setUserGames(favoriteGames);
    }
    setUserGames(games);
  }, [games, navigate, view]);

  const setCategory = (category) => {
    setSelectedCategory(category);
    setView('');
  };

  const handleViewChange = ({ target }) => {
    setView(target.value);
    setSelectedCategory('');
    if (view === 'Favorites') {
      return setUserGames(favoriteGames);
    }
    setUserGames(games);
  };

  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 15%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 100%)',
      }}>
      <Header />
      <Typography
        variant='h4'
        mt={3}
        align='center'
        sx={{ fontFamily: 'Righteous' }}>
        Games in Library:
      </Typography>
      <Toolbar
        sx={{
          mx: mobile ? 2 : 15,
          mt: mobile ? 1.5 : 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <ToggleButtonGroup value={view} exclusive onChange={handleViewChange}>
          <ToggleButton value='All'>All</ToggleButton>
          <ToggleButton value='Favorites'>Favorites</ToggleButton>
        </ToggleButtonGroup>
        <FormControl sx={{ minWidth: mobile ? 100 : 210 }}>
          <InputLabel sx={{ color: '#0288d1 !important' }} id='category-label'>
            Filter by:
          </InputLabel>
          <Select
            label='CATEGORY'
            labelId='category-label'
            variant='standard'
            value={selectedCategory}>
            {categories.map((category) => (
              <MenuItem
                key={category.id}
                value={category.name}
                onClick={() => setCategory(category.name)}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>
      {userGames.length ? <GamesList games={userGames} mobile={mobile} /> : ''}
      <Footer />
    </Paper>
  );
}

export default Library;
