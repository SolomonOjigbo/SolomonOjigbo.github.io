import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Works,
	StarsCanvas,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Routes>
						<Route path="/" element={<Hero />} />
						<Route path="/about-me" element={<About />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/projects" element={<Works />} />
						<Route path="/testimonials" element={<Feedbacks />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
