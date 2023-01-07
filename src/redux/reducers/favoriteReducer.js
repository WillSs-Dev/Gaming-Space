import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteGames: [],
  },
  reducers: {
    addGameToFavorites: (state, { payload }) => {
      state.favoriteGames.push(payload);
    },

    removeGameFromFavorites: (state, { payload }) => {
      state.favoriteGames = state.favoriteGames.filter((game) => game.id !== payload.id);
    },
  },
});

const { addGameToFavorites, removeGameFromFavorites } = favoriteSlice.actions;

const selectFavoriteGames = ({ favorites }) => favorites;

export { addGameToFavorites, removeGameFromFavorites, favoriteSlice, selectFavoriteGames };

export default favoriteSlice.reducer;
