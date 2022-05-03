import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Menu from "./Menu";

function Home() {
	const URL = "http://127.0.0.1:8000/api/menus";
	const [menus, setMenus] = useState([]);
	useEffect(() => {
		axios.get(URL).then((res) => {
			setMenus(res.data);
		});
	}, []);

	return (
		<div>
			<div className='container'>
				<div className='row' id='filterSection'></div>
				<div className='row' id='cardSection'>
					{menus.map((menu) => (
						<Menu
							key={menu.id}
							id={menu.id}
							title={menu.title}
							imgSrc={menu.image}
							score={menu.score}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
