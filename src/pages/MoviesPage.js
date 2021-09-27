import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { fetchMoviesByQuery } from '../services/movies-api';
import Searchbar from '../components/Searchbar/Searchbar';

import styles from './HomePage/homePage.module.css';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const queryMovies = new URLSearchParams(location.search).get('queryBy');
  const [query, setQuery] = useState(queryMovies || '');
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesByQuery(query).then(setMoviesByQuery);
  }, [query]);

  const onChangeQuery = query => {
    setQuery(query);
    history.push({
      ...location,
      search: `queryBy=${query}`,
    });
    setMoviesByQuery(null);
    setError(null);
  };

  return (
    <>
      <Searchbar onSubmit={onChangeQuery} />

      {error && <p>Sorry! Somethimg went wrong. Try again, please!</p>}
      <div className={styles.container}>
        <ul className={styles.cardSet}>
          {moviesByQuery &&
            moviesByQuery.map(movie => (
              <li key={movie.id} className={styles.item}>
                <article className={styles.card}>
                  <Link
                    to={{
                      pathname: `${url}/${movie.id}`,
                      state: { from: location },
                    }}
                  >
                    <div className={styles.cardThumb}>
                      <img
                        className={styles.img}
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </div>
                    <h2 className={styles.cardHeading}>{movie.title}</h2>
                  </Link>
                </article>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
