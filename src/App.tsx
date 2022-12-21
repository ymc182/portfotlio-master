import { useEffect } from "react";
import { Footer, NavBar } from "./components";
import { Projects, Home, About, Header, Experience, Contact } from "./pages";

function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<Projects />
			<About />
			<Experience />
			<Contact />
		</div>
	);
}

export default App;
