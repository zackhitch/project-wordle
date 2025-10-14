import React, { useState } from "react";

function Input({ handleSubmitGuess, gameStatus }) {
	const [guess, setGuess] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log(guess);

		handleSubmitGuess(guess);

		setGuess("");
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter Guess:</label>
			<input
				required
				disabled={gameStatus !== "running"}
				id='guess-input'
				type='text'
				value={guess}
				minLength={5}
				maxLength={5}
				pattern='[a-zA-Z]{5}'
				onChange={(e) => {
					setGuess(e.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default Input;
