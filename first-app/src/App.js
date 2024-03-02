import "./App.css";

export const App = () => {
	// императивный стиль
	const currentYear = new Date().getFullYear();

	return (
		<>
			{/* императивный стиль */}
			<h2>{currentYear}</h2>
		</>
	);
};
