import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  fetchAsyncDetail,
  getSelectedMovie,
  removeSelectedMovie,
} from '../../featured/movies/movieSlice';
import './MovieDetail.scss';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  console.log(imdbID);
  const data = useSelector(getSelectedMovie);
  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID));

    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [imdbID, dispatch]);
  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className='section-left'>
            <div className='movie-title'>{data.Title}</div>
            <div className='movie-rating'>
              <span>
                IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className='fa fa-thumbs-up'></i> :{' '}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className='fa fa-film'></i> : {data.Runtime}
              </span>
              <span>
                Year <i className='fa fa-calendar'></i> : {data.Year}
              </span>
            </div>
            <div className='movie-plot'>{data.Plot}</div>
            <div className='movie-info'>
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languagues</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className='section-right'>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
