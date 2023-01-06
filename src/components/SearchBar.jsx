import React from 'react';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  Toolbar,
  ButtonGroup,
  Button,
  Select,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { Container } from '@mui/system';
import { useTheme, MenuItem } from '@mui/material';
import { useState } from 'react';
import { categories } from '../api/mock-responses';
import { useDispatch } from 'react-redux';
import { requestSearchedGames } from '../redux/reducers/catalogSlice';

function SearchBar({ viewSlider, viewPagination }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inputText, setInputText] = useState('');
  const { palette } = useTheme();
  const dispatch = useDispatch();

  const handleText = ({ target: { value } }) => {
    setInputText(value);
  };

  const enterSearch = ({ key }) => {
    if (key === 'Enter') {
      viewSlider(false);
      setInputText('');
      viewPagination(false);
      dispatch(requestSearchedGames(inputText));
    }
  };

  const triggerSearch = () => {
    viewSlider(false);
    viewPagination(false);
    dispatch(requestSearchedGames(inputText));
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container sx={{ px: '0 !important' }}>
      <Toolbar
        sx={{
          py: 2,
          backgroundColor: palette.background.paper,
          justifyContent: 'space-around',
        }}>
        <ButtonGroup variant='text' color='info'>
          <Button onClick={() => viewSlider(false)}>All</Button>
          <Button
            onClick={() => viewSlider(false)}
            sx={{ width: '150px', textTransform: 'none' }}>
            <FormControl fullWidth>
              <InputLabel
                sx={{ color: '#0288d1 !important' }}
                id='category-label'>
                CATEGORY
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
          </Button>
        </ButtonGroup>
        <FormControl>
          <InputLabel htmlFor='outlined-adornment-search'>Search</InputLabel>
          <OutlinedInput
            type='text'
            id='outlined-adornment-search'
            value={inputText}
            onChange={handleText}
            onKeyUp={enterSearch}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={triggerSearch}>
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            label='Search'
          />
        </FormControl>
      </Toolbar>
    </Container>
  );
}

export default SearchBar;
