// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";

class App extends Component {
	state = {
		menus: [],
	};

	async componentDidMount() {
		try {
			const res = await fetch("http://127.0.0.1:8000/api/");
			const menus = await res.json();
			this.setState({
				menus,
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div>
				{this.state.menus.map((item) => (
					<div key={item.id}>
						<h1>{item.title}</h1>
						<span>{item.description}</span>
					</div>
				))}
			</div>
		);
	}
}

export default App;
