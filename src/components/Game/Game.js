import React, { useState } from "react";
import Input from "../Input";
import GuessResult from "../GuessResult/GuessResult";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);

	function handleSubmitGuess(nextGuess) {
		setGuesses((currentGuesses) => [...currentGuesses, nextGuess]);
	}

	return (
		<>
			<GuessResult guesses={guesses} answer={answer} />
			<Input handleSubmitGuess={handleSubmitGuess} />
		</>
	);
}

export default Game;
