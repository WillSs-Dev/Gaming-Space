import { createSlice } from '@reduxjs/toolkit';

const viewSlice = createSlice({
  name: 'view',
  initialState: {
    view: 'all',
  },
  reducers: {
    updateCategory: (state, { payload }) => {
      state.view = payload;
    },
  },
});

const { updateCategory } = viewSlice.actions;

const selectCurrentView = ({view}) => view;

export { updateCategory, viewSlice, selectCurrentView };

export default viewSlice.reducer;
