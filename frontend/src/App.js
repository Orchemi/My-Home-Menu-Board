// import './App.css';
import React from "react";
import { useState, useEffect } from "react";

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

			<form action="http://127.0.0.1:8000/api/menus/" method="POST">
				<label htmlFor="add_menu_title">메뉴명</label>
				<input type="text" name="title" id="add_menu_title" />
				<label htmlFor="add_menu_description">메뉴 설명</label>
				<input type="text" name="description" id="add_menu_description" />
				<label htmlFor="add_menu_score">호감도</label>
				<input type="number" name="score" id="add_menu_score" />
				<input type="submit" value="완료" />
			</form>
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
