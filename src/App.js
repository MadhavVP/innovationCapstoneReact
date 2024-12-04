import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import Education from "./pages/education";
import Browser from "./pages/browser";
import Policy from "./pages/policy";
import Resources from "./pages/resources";
import Resourcescs from "./pages/resourcescs";

import "./app.css";
 
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/education" element={<Education />} />
				<Route path="/browser" element={<Browser />} />
				<Route path="/policy" element={<Policy />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="/resourcescs" element={<Resourcescs />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
