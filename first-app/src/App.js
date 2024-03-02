import { createElement } from "react";
import "./App.css";

const thisYear = (year) => {
	return createElement("h2", null, year);
};

export const App = () => {
	const currentYear = new Date().getFullYear();
	return thisYear(currentYear);
};
