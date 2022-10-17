import React from 'react';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { Container } from '@mui/system';

function SearchBar() {
  return (
    <Container sx={{ py: 2 }}>
      <FormControl>
        <InputLabel
          htmlFor='outlined-adornment-search'
        >
          Search
        </InputLabel>
        <OutlinedInput
          type='text'
          id='outlined-adornment-search'
          endAdornment={
            <InputAdornment position='start'>
              <IconButton edge='start'>
                <Search />
              </IconButton>
            </InputAdornment>
          }
          label='Search'
        />
      </FormControl>
    </Container>
  );
}

export default SearchBar;
