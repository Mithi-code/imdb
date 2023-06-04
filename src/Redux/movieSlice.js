import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
 async () => {
   await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=ebab107d0e771faee711646843039664&language=en-US"
  )
    .then((res) => res.json())
    .then((data) => (console.log(data.results)));
 }
);


const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    movies: (state, action) => {
      state.movies.push(action.payload );
    },
  },
});

export const { movies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
// export const getAllShows = (state) => state.movies.shows;
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;