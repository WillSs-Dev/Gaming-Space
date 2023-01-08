import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    userReviews: [],
  },
  reducers: {
    addReview: (state, { payload }) => {
      state.reviews.push(payload);
    },

    removeReview: (state, { payload }) => {
      state.reviews = state.reviews.filter((review) => review.id !== payload.id);
    },
  },
});

const { addReview, removeReview } = reviewSlice.actions;

const selectUserReviews = ({ reviews }) => reviews;

export { addReview, removeReview, reviewSlice, selectUserReviews };

export default reviewSlice.reducer;
