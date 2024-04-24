import { useState } from "react";
import { useGlobalContext } from "../context";
import { data } from "../data";

function Game() {
	const { resultObj, setResultObj, setScore } = useGlobalContext();

	let playArr = [];
	let outArr = [];
	let valueObj = {};

	const resultSetter = (result) =>
		setResultObj({
			displayHands: outArr,
			resultMsg: `You ${result}`,
		});

	const playComparator = (userPlay) => {
		let housePlay = data[Math.floor(Math.random() * 2)].play;
		playArr = [userPlay, housePlay];

		outArr = playArr.map((e) => data.find((x) => e === x.play));

		if (playArr[0] === playArr[1]) {
			resultSetter("drew");
		}
		if (playArr.includes("rock") && playArr.includes("paper")) {
			valueObj = { paper: 1, rock: 0 };
			if (valueObj[userPlay] > valueObj[housePlay]) {
				setScore((oldValue) => oldValue + 1);
				return resultSetter("win");
			}
			return resultSetter("loose");
		}
		if (playArr.includes("rock") && playArr.includes("scissor")) {
			valueObj = { scissor: 0, rock: 1 };
			if (valueObj[userPlay] > valueObj[housePlay]) {
				setScore((oldValue) => oldValue++);
				return resultSetter("win");
			}
			return resultSetter("loose");
		}
		if (playArr.includes("scissor") && playArr.includes("paper")) {
			valueObj = { paper: 0, scissor: 1 };
			if (valueObj[userPlay] > valueObj[housePlay]) {
				setScore((oldValue) => oldValue++);
				return resultSetter("win");
			}
			return resultSetter("loose");
		}
	};

	let displayArr = resultObj.displayHands.map((e, i) => {
		return (
			<div
				key={i}
				className={"play-icon-container"}
				style={{ borderColor: e.borderColor }}
				onClick={() => playComparator(e.play)}
			>
				<img src={e.iconSrc} alt="" />
			</div>
		);
	});

	displayArr.push(
		<section
			key={8}
			className={resultObj.displayHands.length == 3 ? "hidden" : ""}
		>
			<p>{resultObj.resultMsg.toUpperCase()}</p>
			<button
				onClick={() =>
					setResultObj({
						displayHands: data,
						resultMsg: "",
					})
				}
			>
				PLAY AGAIN
			</button>
		</section>
	);

	return (
		<div
			className={
				resultObj.displayHands.length == 3
					? "game-container"
					: "game-container game-container-result"
			}
		>
			{displayArr}
		</div>
	);
}

export default Game;
