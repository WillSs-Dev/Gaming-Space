import { createSlice } from '@reduxjs/toolkit';
import { getNewPage, getNewPageWithCategory, searchGames } from '../../api';

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

const requestNewGamesByCategory = (navNumber, category) => async (dispatch) => {
  try {
    const { results } = await getNewPageWithCategory(navNumber, category.toLowerCase());
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

export { storeRequestedGames, catalogSlice, requestNewGames, selectGamesInCatalog, requestSearchedGames, requestNewGamesByCategory };

export default catalogSlice.reducer;
