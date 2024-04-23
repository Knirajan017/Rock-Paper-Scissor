import { Children } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const ScoreContext = createContext();
export const useScoreContext = () => useContext(ScoreContext);

function AppContext({ children }) {
	const [score, setScore] = useState(0);
	return (
		<ScoreContext.Provider value={{ score, setScore }}>
			{children}
		</ScoreContext.Provider>
	);
}

export default AppContext;
