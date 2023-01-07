import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
  name: 'library',
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

const { addGame, removeGame } = librarySlice.actions;

const selectGamesInLibrary = ({ games }) => games;

export { addGame, removeGame, librarySlice, selectGamesInLibrary };

export default librarySlice.reducer;
