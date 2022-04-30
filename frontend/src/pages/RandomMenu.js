import { Link } from "react-router-dom";
import "./RandomMenu.css";
import "./base.css";
import _ from "lodash";

function RandomMenu() {
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

	const scoreStar = (score) => {
		let stars = "";
		for (let i = 0; i < score; i++) {
			stars += "★";
		}
		for (let i = score; i < 5; i++) {
			stars += "☆";
		}

		return stars;
	};

	const randomPick = () => {
		const randomIndex = _.sample(_.range(0, 3));
		const randomMenu = menus[randomIndex];
		return randomMenu;
	};

	const { title, description, score } = randomPick();

	const clickRepick = () => {
		const { title, description, score } = randomPick();
	};

	clickRepick()

	return (
		<div>
			<h1 className='subtitle'>랜덤 메뉴 추천</h1>
			<div className='random-menu-container'>
				<div>
					{/* <img src={imgSrc} alt={`${title} 사진`} className='menuImg' /> */}
					<img
						src='https://via.placeholder.com/300/fcb6c3/fff?text=Menu Image'
						alt={`${title} 사진`}
						className='menuImg'
						style={{ borderRadius: "10px", boxShadow: "2px 2px 3px gray" }}
					/>
					<h1 className='my-3'>{title}</h1>
					<p>{description}</p>
					<h2>{scoreStar(score)}</h2>
				</div>
				<button className='btn btn-primary btn-quarter' onClick={clickRepick}>
					다시 뽑기!
				</button>
			</div>
		</div>
	);
}

export default RandomMenu;
