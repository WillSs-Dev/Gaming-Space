import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers/catalogSlice';
import currentGameReducer from './reducers/currentGameSlice';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    currentGame: currentGameReducer,
  },
});

export default store;
