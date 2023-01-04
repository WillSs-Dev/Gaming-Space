import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    view: 'store',
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.view = payload;
    },
  },
});

const { setPage } = pageSlice.actions;

const selectCurrentPage = ({page}) => page.view;

export { pageSlice, selectCurrentPage, setPage };

export default pageSlice.reducer;
