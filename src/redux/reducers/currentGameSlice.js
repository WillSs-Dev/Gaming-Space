import { createSlice } from '@reduxjs/toolkit';

const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState: {
    game: {},
  },
  reducers: {
    storeCurrentGame: (state, { payload }) => {
      state.game = payload;
    },
  },
});

const { storeCurrentGame } = currentGameSlice.actions;

const selectCurrentGame = ({currentGame}) => currentGame;

export { storeCurrentGame, currentGameSlice, selectCurrentGame };

export default currentGameSlice.reducer;
