import { createSlice } from '@reduxjs/toolkit';
import { getNewPage, searchGames } from '../../api';

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

const requestSearchedGames = (inputText) => async (dispatch) => {
  try {
    const { results } = await searchGames(inputText);
    dispatch(storeRequestedGames(results));
  } catch (e) {
    console.log(e);
  }
}

const selectGamesInCatalog = ({catalog}) => catalog;

export { storeRequestedGames, catalogSlice, requestNewGames, selectGamesInCatalog, requestSearchedGames };

export default catalogSlice.reducer;
