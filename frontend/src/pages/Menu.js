import { Link } from "react-router-dom";

function Menu({ id, title, imgSrc, score }) {
	console.log(imgSrc);
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
	const URL = "http://127.0.0.1:8000/api/menus";

	return (
		<div
			className='menu-card col-12 col-lg-6 col-xl-4'
			style={{ marginTop: "30px" }}
		>
			<div>
				<Link
					to={`/menu/${id}`}
					style={{ textDecoration: "none", color: "black" }}
					className='menu-card-link'
				>
					<img
						src={`${URL}${imgSrc}`}
						alt={`${title} 사진`}
						className='menuImg'
						style={{ width: "300px", height: "300px" }}
					/>
					{/* <img
						src='https://via.placeholder.com/300/fcb6c3/fff?text=Menu Image'
						alt={`${title} 사진`}
						className='menuImg'
						style={{ borderRadius: "10px", boxShadow: "2px 2px 3px gray" }}
					/> */}
					<h1 className='my-3'>{title}</h1>
					<h2>{scoreStar(score)}</h2>
				</Link>
			</div>
		</div>
	);
}

export default Menu;
