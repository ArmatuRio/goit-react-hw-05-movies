import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import { fetchMovies } from '../../services/movies-api';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

import styles from './movieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <div className={styles.movieDetailsPage}>
      <button onClick={onGoBack} className={styles.button}>
        Go Back
      </button>

      {movie && (
        <div className={styles.conteiner}>
          <img
            className={styles.imgMovie}
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={styles.movieDetails}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p>User Score: {movie.vote_average * 10}%</p>

            <h2 className={styles.title}>Overview</h2>
            <p>{movie.overview}</p>

            <h2 className={styles.title}>Genres</h2>
            <p>{movie.genres.map(genre => `${genre.name} `)}</p>
          </div>
        </div>
      )}
      <div>
        <h3 className={styles.title}>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <hr />
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </div>
    </div>
  );
}
