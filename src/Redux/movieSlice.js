import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    movies: (state, action) => {
      state.movie.push(action.payload );
    },
  },
});

export const { movies } = movieSlice.actions;

export default movieSlice.reducer;