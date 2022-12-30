import { createSlice } from '@reduxjs/toolkit';
import { getFivePagesOfGames } from '../../api';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: [],
  reducers: {
    storeRequestedGames: (state, { payload }) => {
      state = payload;
    },
  },
});

const { storeRequestedGames } = catalogSlice.actions;

const requestNewGames = (navNumber) => (dispatch) => {
  try {
    const { results } = getFivePagesOfGames(navNumber);
    dispatch(storeRequestedGames(results));
  } catch (e) {
    console.log(e);
  }
};

export { storeRequestedGames, catalogSlice, requestNewGames };

export default catalogSlice.reducer;
