import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/api/movieApi';
import { APIKEY } from '../../common/api/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${APIKEY}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${APIKEY}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncDetail = createAsyncThunk(
  'movies/fetchAsyncDetail',
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovie: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('Fetched');
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: (state, payload) => {
      console.log('Error');
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('Fetched');
      return { ...state, shows: payload };
    },
    [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
      console.log('Fetched');
      return { ...state, selectedMovie: payload };
    },
  },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export default movieSlice.reducer;
