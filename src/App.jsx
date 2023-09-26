import './App.css';
import { useState } from 'react';
import Rating from './rating.component';

function App() {
	const [itemRating, setItemRating] = useState(0);
	return (
		<main>
			<h1>Rating - Component</h1>
			Item Rating: {itemRating}
			<Rating onChange={setItemRating} />
		</main>
	);
}

export default App;
