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
			console.log(json);
			setMenus(json);
		} catch (e) {
			console.log(e);
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

// class App extends Component {
// 	state = {
// 		menus: [],
// 	};

// 	async componentDidMount() {
// 		try {
// 			const res = await fetch("http://127.0.0.1:8000/api/menus/");
// 			const menus = await res.json();
// 			this.setState({
// 				menus,
// 			});
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	}

// 	render() {
// 		return (
// 			<div>
// 				{this.state.menus.map((item) => (
// 					<div key={item.id}>
// 						<h1>{item.title}</h1>
// 						<h2>{item.score}</h2>
// 						<span>{item.description}</span>
// 						<span></span>
// 					</div>
// 				))}

// 					<form action=""></form>

// 			</div>
// 		);
// 	}
// }

export default App;
