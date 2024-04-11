import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";
import Header from "./components/Header";

function App() {
	const [expanded, setExpanded] = useState(true);
	return (
		<div className='App relative w-full'>
			<Header setExpanded={setExpanded} />
			<div className='absolute top-0 left-0 right-0 h-60 bg-gradient-to-r from-purple-600 to-pink-500 z-[-1]'></div>
			<div className='flex space-x-4 flex-1 pt-1'>
				<Sidebar expanded={expanded} />
				<MainContent />
			</div>
		</div>
	);
}

export default App;
