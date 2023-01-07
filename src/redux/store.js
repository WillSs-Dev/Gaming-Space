import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers/catalogSlice';
import viewReducer from './reducers/viewSlice';
import libraryReducer from './reducers/libraryReducer';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    view: viewReducer,
    library: libraryReducer,
  },
});

export default store;
