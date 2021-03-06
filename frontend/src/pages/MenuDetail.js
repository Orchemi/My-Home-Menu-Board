import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { padStart } from "lodash";
import "./MenuDetail.css";

function MenuDetail() {
	const navigate = useNavigate();
	const URL = "http://127.0.0.1:8000/api/menus";
	const menuId = useParams().id;
	const [menuInfo, setMenuInfo] = useState({});
	const loadMenuDetailInfo = () => {
		axios.get(`${URL}/menu/${menuId}`).then((res) => {
			const data = res.data;
			console.log(data);
			setMenuInfo(data);
		});
	};

	useEffect(() => {
		loadMenuDetailInfo();
	}, []);

	const scoreStar = (score) => {
		let stars = "";
		for (let i = 0; i < score; i++) {
			stars += "π";
		}
		for (let i = score; i < 5; i++) {
			stars += "π";
		}

		return stars;
	};

	let {
		title,
		score,
		image,
		description,
		category1,
		category2,
		created_at,
		updated_at,
	} = menuInfo;

	if (!image) {
		image = "/media/images/no_image.png";
	}

	function convertFromStringToDate(dateData) {
		const dateInfo = new Date(dateData);
		const Y = dateInfo.getFullYear();
		const M = dateInfo.getMonth() + 1;
		const D = dateInfo.getDay() + 1;
		const h = padStart(`${dateInfo.getHours()}`, 2, "0");
		const m = padStart(`${dateInfo.getMinutes()}`, 2, "0");

		return `${Y}λ ${M}μ ${D}μΌ ${h}:${m}`;
	}

	const created_at2 = convertFromStringToDate(created_at);
	const updated_at2 = convertFromStringToDate(updated_at);

	const deleteMenu = (event) => {
		event.preventDefault();
		if (window.confirm("μ λ§ μ­μ νμκ² μ΅λκΉ?")) {
			axios({
				method: "delete",
				url: `${URL}/menu/${menuId}`,
			})
				.then((res) => {
					alert("μ­μ κ° μλ£λμμ΅λλ€.");
					navigate("/");
				})
				.catch("μ­μ μ μ€ν¨νμ΅λλ€.");
		}
	};

	return (
		<div>
			<div
				className='detail-menu-space'
				style={{
					backgroundImage: `url(${URL}${image})`,
					backgroundSize: "cover",
				}}
			>
				<div className='detail-menu-container'>
					<div>
						<h1 className='subtitle'>{title}</h1>
						<img
							src={`${URL}${image}`}
							alt={`${title} μ¬μ§`}
							className='menuImg'
							style={{
								width: "300px",
								height: "300px",
								borderRadius: "10px",
								boxShadow: "4px 4px 5px gray",
								marginBottom: "20px",
							}}
						/>
						<p>{description}</p>
						<h5>
							{category1}, {category2}
						</h5>
						<h2>{scoreStar(score)}</h2>
						<p>λ±λ‘ : {created_at2}</p>
						<p>μμ  : {updated_at2}</p>
						<button
							style={{
								width: "80%",
								padding: "0.3em",
								margin: "0.3em",
								backgroundColor: "crimson",
								color: "white",
								border: "none",
								borderRadius: "5px",
								boxShadow: "2px 2px 3px lightgray",
							}}
							onClick={deleteMenu}
						>
							μ­μ 
						</button>
						{/* <button
							style={{
								width: "80%",
								padding: "0.3em",
								margin: "0.3em",
								backgroundColor: "green",
								color: "white",
								border: "none",
								borderRadius: "5px",
								boxShadow: "2px 2px 3px lightgray",
							}}
						>
							μμ 
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuDetail;
