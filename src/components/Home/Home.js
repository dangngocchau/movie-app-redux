import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../featured/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const movieShows = 'Friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(movieShows));
  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />;
    </div>
  );
};

export default Home;
