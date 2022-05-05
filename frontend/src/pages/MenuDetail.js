import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { padStart } from "lodash";
import "./MenuDetail.css";

function MenuDetail() {
	const URL = "http://127.0.0.1:8000/api/menus";
	const menuId = useParams().id;
	const [menuInfo, setMenuInfo] = useState({});
	const loadMenuDetailInfo = () => {
		axios.get(`${URL}/menu/${menuId}`).then((res) => {
			const data = res.data;
			setMenuInfo(data);
		});
	};

	useEffect(() => {
		loadMenuDetailInfo();
	}, []);

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

	const {
		title,
		score,
		image,
		description,
		category1,
		category2,
		created_at,
		updated_at,
	} = menuInfo;

	function convertFromStringToDate(dateData) {
		const dateInfo = new Date(dateData);
		const Y = dateInfo.getFullYear();
		const M = dateInfo.getMonth() + 1;
		const D = dateInfo.getDay() + 1;
		const h = padStart(`${dateInfo.getHours()}`, 2, "0");
		const m = padStart(`${dateInfo.getMinutes()}`, 2, "0");

		return `${Y}년 ${M}월 ${D}일 ${h}:${m}`;
	}

	const created_at2 = convertFromStringToDate(created_at);
	const updated_at2 = convertFromStringToDate(updated_at);

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
							alt={`${title} 사진`}
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
						<p>등록 : {created_at2}</p>
						<p>수정 : {updated_at2}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuDetail;
