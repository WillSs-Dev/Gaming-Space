import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers/catalogSlice';
import viewReducer from './reducers/viewSlice';
import libraryReducer from './reducers/libraryReducer';
import favoriteReducer from './reducers/favoriteReducer';
import reviewReducer from './reducers/reviewSlice.js';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    view: viewReducer,
    library: libraryReducer,
    favorites: favoriteReducer,
    reviews: reviewReducer,
  },
});

export default store;
