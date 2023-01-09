import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    userReviews: [],
  },
  reducers: {
    addReview: (state, { payload }) => {
      state.userReviews.push(payload);
    },

    removeReview: (state, { payload }) => {
      state.userReviews = state.userReviews.filter((review) => review.id !== payload.id);
    },

    editReview: (state, { payload }) => {
      state.userReviews[payload.id] = payload;

    },
  },
});

const { addReview, removeReview, editReview } = reviewSlice.actions;

const selectUserReviews = ({ reviews }) => reviews;

export { addReview, removeReview, editReview, reviewSlice, selectUserReviews };

export default reviewSlice.reducer;
