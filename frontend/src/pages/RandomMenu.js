import { useState, useEffect } from "react";
import axios from "axios";
import "./RandomMenu.css";
import "./base.css";

function RandomMenu() {
	const URL = "http://127.0.0.1:8000/api/menus";
	const PATH = "/random_menu/";
	const [randomMenu, setRandomMenu] = useState([]);

	function randomPick() {
		axios.get(`${URL}${PATH}`).then((res) => {
			setRandomMenu(res.data);
		});
	}

	useEffect(() => {
		randomPick();
	}, []);

	let { title, score, image, description, category1, category2 } = randomMenu;

	if (!image) {
		image = "/media/images/no_image.png";
	}

	const scoreStar = (score) => {
		let stars = "";
		for (let i = 0; i < score; i++) {
			stars += "🌝";
		}
		for (let i = score; i < 5; i++) {
			stars += "🌚";
		}

		return stars;
	};

	return (
		<div>
			<div
				className='random-menu-space'
				style={{
					backgroundImage: `url(${URL}${image})`,
					backgroundSize: "cover",
				}}
			>
				<div className='random-menu-container'>
					<div>
						<h1 className='subtitle'>랜덤 메뉴 추천</h1>
						<img
							src={`${URL}${image}`}
							alt={`${title} 사진`}
							className='menuImg'
							style={{
								width: "300px",
								height: "300px",
								borderRadius: "10px",
								boxShadow: "4px 4px 5px gray",
							}}
						/>
						<h1 className='my-3'>{title}</h1>
						<p>{description}</p>
						<h5>
							{category1}, {category2}
						</h5>
						<h2>{scoreStar(score)}</h2>
					</div>
					<button className='btn btn-primary btn-quarter' onClick={randomPick}>
						다시 뽑기!
					</button>
				</div>
			</div>
		</div>
	);
}

export default RandomMenu;
