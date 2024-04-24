import { Children } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { data } from "./data";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

console.log(data);
function AppContext({ children }) {
	const [score, setScore] = useState(0);
	// const [resultObj, setResultObj] = useState({});
	const [resultObj, setResultObj] = useState({
		displayHands: data,
		resultMsg: "draw",
	});

	return (
		<GlobalContext.Provider
			value={{ score, setScore, resultObj, setResultObj }}
		>
			{children}
		</GlobalContext.Provider>
	);
}

export default AppContext;
