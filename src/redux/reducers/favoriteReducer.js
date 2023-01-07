import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    games: [],
  },
  reducers: {
    addGame: (state, { payload }) => {
      state.games.push(payload);
    },

    removeGame: (state, { payload }) => {
      state.games = state.games.filter((game) => game.id !== payload.id);
    },
  },
});

const { addGame, removeGame } = favoriteSlice.actions;

const selectFavoriteGames = ({ favorites }) => favorites;

export { addGame, removeGame, favoriteSlice, selectFavoriteGames };

export default favoriteSlice.reducer;
