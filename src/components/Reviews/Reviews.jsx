import { fetchReviews } from 'api/fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const hendleFetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch {
      } finally {
        setIsLoading(false);
      }
    };

    hendleFetchReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {reviews.length !== 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </div>
  );
};

export default Reviews;
