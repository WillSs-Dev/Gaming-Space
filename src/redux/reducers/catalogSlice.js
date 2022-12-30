import { createSlice } from '@reduxjs/toolkit';
import { getNewPage } from '../../api';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    games: [],
  },
  reducers: {
    storeRequestedGames: (state, { payload }) => {
      state.games = payload;
    },
  },
});

const { storeRequestedGames } = catalogSlice.actions;

const requestNewGames = (navNumber) => async (dispatch) => {
  try {
    const { results } = await getNewPage(navNumber);
    dispatch(storeRequestedGames(results));
  } catch (e) {
    console.log(e);
  }
};

const selectGamesInCatalog = (state) => state;

export { storeRequestedGames, catalogSlice, requestNewGames, selectGamesInCatalog };

export default catalogSlice.reducer;
