// import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import MenuCreate from "./components/MenuCreate";

function App() {
	const [menus, setMenus] = useState([]);

	const getMenus = async () => {
		try {
			const response = await fetch("http://127.0.0.1:8000/api/menus/");
			const json = await response.json();
			// console.log(json);
			setMenus(json);
		} catch (e) {
			console.error(e);
		}
	};
	useEffect(() => {
		getMenus();
	}, []);

	return (
		<div>
			{menus.map((item) => (
				<div key={item.id}>
					<h1>{item.title}</h1>
					<h2>{item.score}</h2>
				</div>
			))}
			<MenuCreate />
		</div>
	);
}

export default App;
