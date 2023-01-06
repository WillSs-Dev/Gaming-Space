import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers/catalogSlice';
import viewReducer from './reducers/viewSlice'

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    view: viewReducer,
  },
});

export default store;
