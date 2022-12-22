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

const categories = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Indie' },
  { id: 3, name: 'Adventure' },
  { id: 4, name: 'RPG' },
];

function SearchBar({ viewSlider }) {
  const { palette } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('');

  const setCategory = (category) => {
    console.log(category);
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
          <Button onClick={() => viewSlider(false)}>News</Button>
        </ButtonGroup>
        <FormControl>
          <InputLabel htmlFor='outlined-adornment-search'>Search</InputLabel>
          <OutlinedInput
            type='text'
            id='outlined-adornment-search'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => viewSlider(false)}>
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
