import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAboutActors } from '../../services/movies-api';

import styles from './cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchAboutActors(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <ul className={styles.cardSet}>
        {cast &&
          cast.map(actor => (
            <li key={actor.id} className={styles.item}>
              <article className={styles.card}>
                {actor.profile_path && (
                  <div className={styles.cardThumb}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                      alt={actor.name}
                    />
                  </div>
                )}
                <p className={styles.actorName}>{actor.name}</p>
                <p className={styles.actorName}>{actor.character}</p>
              </article>
            </li>
          ))}
      </ul>
    </div>
  );
}
