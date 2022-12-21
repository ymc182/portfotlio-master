import { useEffect } from "react";
import { Footer, NavBar } from "./components";
import { Projects, Home, About, Header, Works } from "./pages";

function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<Projects />
			<About />
			<Works />

			{/* 		<Footer /> */}
		</div>
	);
}

export default App;
