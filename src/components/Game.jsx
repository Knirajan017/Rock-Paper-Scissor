import { playIcons } from "../assets/images/game-data";

function Game() {
	return (
		<div className="game-container">
			{playIcons.map((e)=>{
				return (
					<div className='play-icon-container' style={{borderColor:e.borderColor}}>
						<img src={e.iconSrc} alt="" />
					</div>
				);
			})}
			
		</div>
	);
}

export default Game;
