import { useState, useCallback, useEffect } from 'react';
import './rating.styles.css';

const Rating = ({ maxRating = 5, onChange = () => {} }) => {
	const [currentRating, setCurrentRating] = useState(0);
	const [hoverRating, setHoverRating] = useState(0);

	const setCurrentRatingHandler = useCallback(
		(ratingValue) => {
			currentRating === ratingValue
				? setCurrentRating(0)
				: setCurrentRating(ratingValue);
		},
		[currentRating]
	);

	useEffect(() => {
		onChange(currentRating);
	}, [currentRating, onChange]);

	return (
		<div className='rating-container'>
			Current Rating: {currentRating}
			{[...Array(maxRating)].map((_, idx) => {
				const ratingValue = idx + 1;
				return (
					<p
						key={idx}
						onClick={() => {
							setCurrentRatingHandler(ratingValue);
						}}
						className={`rating ${
							ratingValue <= (hoverRating || currentRating) ? 'active' : ''
						}`}
						onMouseEnter={() => setHoverRating(ratingValue)}
						onMouseLeave={() => setHoverRating(0)}
					>
						{/* Rating icon HTML code goes here */}
						&#9733;
					</p>
				);
			})}
		</div>
	);
};

export default Rating;
