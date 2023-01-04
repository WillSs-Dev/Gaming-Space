import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers/catalogSlice';
import pageReducer from './reducers/pageSlice';

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    page: pageReducer,
  },
});

export default store;
