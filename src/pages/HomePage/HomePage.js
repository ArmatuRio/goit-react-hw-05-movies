import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { fetchTrendingMovies } from '../../services/movies-api';

import styles from './homePage.module.css';

export default function HomeView() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2 className={styles.title}>Trending today</h2>
      <div className={styles.container}>
        <ul className={styles.cardSet}>
          {movies &&
            movies.map(movie => (
              <li key={movie.id} className={styles.item}>
                <article className={styles.card}>
                  <Link
                    to={{
                      pathname: `/movies/${movie.id}`,
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
