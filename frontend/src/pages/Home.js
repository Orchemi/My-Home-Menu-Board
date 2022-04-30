import { Link } from "react-router-dom";
import "./Home.css";
import Menu from "./Menu";

function Home() {
	const url =
		"https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/foodMenus";

	const Menu1 = {
		id: 1,
		title: "김치찌개",
		description: "엄청 맛있는 김치찌개",
		imgSrc: "img/menu/kimchisoup.jpg",
		score: 4,
	};

	const Menu2 = {
		id: 2,
		title: "산채 비빔밥",
		description: "고기가 하나도 안 들어간... 비빔밥",
		imgSrc: "img/menu/bibimbab.jpg",
		score: 3,
	};

	const Menu3 = {
		id: 3,
		title: "비빔국수",
		description: "오이가 들어가서 엄청 시원하고 양념도 맛있는 비빔국수",
		imgSrc: "img/menu/bibimnoodle.jpg",
		score: 3,
	};

	const menus = [Menu1, Menu2, Menu3];

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
							imgSrc={menu.imgSrc}
							score={menu.score}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
