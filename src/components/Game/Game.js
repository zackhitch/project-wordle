import React, { useState } from "react";
import Input from "../Input";
import GuessResult from "../GuessResult/GuessResult";
import GameOver from "../GameOver/GameOver";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [gameStatus, setGameStatus] = useState("running");
	const [guesses, setGuesses] = useState([]);

	function Reset() {
		const resetGameStatus = "running";
		const resetGameGuesses = [];

		return (
			<form
				className='resetForm'
				onSubmit={(e) => {
					e.preventDefault();
					setGameStatus(resetGameStatus);
					setGuesses(resetGameGuesses);
					window.location.reload();
				}}
			>
				<button className='resetBtn'>Play Again</button>
			</form>
		);
	}

	function handleSubmitGuess(nextGuess) {
		const nextGuesses = [...guesses, nextGuess];
		setGuesses(nextGuesses);

		if (nextGuess.toUpperCase() === answer) {
			setGameStatus("won");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	}

	return (
		<>
			{gameStatus !== "running" && <Reset />}
			<GuessResult guesses={guesses} answer={answer} />
			<Input
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
			/>
			{gameStatus !== "running" && (
				<GameOver
					gameStatus={gameStatus}
					answer={answer}
					numOfGuesses={guesses.length}
				/>
			)}
		</>
	);
}

export default Game;
