import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import user from '../../images/user.png';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../featured/movies/movieSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please typing your film');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>Movie App</Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={term}
            placeholder='Seach movie'
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt='user' />
      </div>
    </div>
  );
};

export default Header;
