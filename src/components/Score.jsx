import { useScoreContext } from "../assets/images/context";

function Score() {
	const { score } = useScoreContext();
	return (
		<div className="logo-score-container">
			<div className="logo">
				<img src="../src/assets/images/logo.svg" alt="Game logo" />
			</div>

			{/* Score */}
			<div className="score-container">
				<p>SCORE</p>
				<p>{score}</p>
			</div>
		</div>
	);
}

export default Score;
