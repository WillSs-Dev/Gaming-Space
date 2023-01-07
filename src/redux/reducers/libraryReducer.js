import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    games: [],
  },
  reducers: {
    addGameToLibrary: (state, { payload }) => {
      state.games.push(payload);
    },

    removeGameFromLibrary: (state, { payload }) => {
      state.games = state.games.filter((game) => game.id !== payload.id);
    },
  },
});

const { addGameToLibrary, removeGameFromLibrary } = librarySlice.actions;

const selectGamesInLibrary = ({ library }) => library;

export { addGameToLibrary, removeGameFromLibrary, librarySlice, selectGamesInLibrary };

export default librarySlice.reducer;
