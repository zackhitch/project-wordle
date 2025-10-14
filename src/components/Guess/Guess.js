import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value = "", answer }) {
	const result = value.length === 5 ? checkGuess(value, answer) : null;

	return (
		<p className='guess'>
			{range(5).map((num) => {
				const letter = value[num] || "";
				const status = result ? result[num]?.status : "";
				return (
					<span key={num} className={`cell ${status || ""}`}>
						{letter}
					</span>
				);
			})}
		</p>
	);
}

export default Guess;
