import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/movies-api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews && reviews.length > 0) {
    return (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }

  return <p>We don't have any reviews for this movie</p>;
}
