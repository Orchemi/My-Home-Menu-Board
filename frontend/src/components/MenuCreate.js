import React from "react";
import { useState, useEffect } from "react";

function MenuCreate() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [score, setScore] = useState("");
	const [disabled, setDisabled] = useState(false);

	const handleChangeTitle = ({ target: { value } }) => setTitle(value);
	const handleChangeDescription = ({ target: { value } }) =>
		setDescription(value);
	const handleChangeScore = ({ target: { value } }) => setScore(value);

	// 메뉴 생성 handler
	const handleMenuCreate = async (menu_create_info) => {
		await fetch("http://localhost:8000/api/menus/", {
			method: "post",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(menu_create_info),
		});
	};

	const handleSubmit = (event) => {
		setDisabled(true);
		event.preventDefault();
		const menu_create_info = {
			title: title,
			description: description,
			score: score,
		};
		handleMenuCreate(menu_create_info);
		setDisabled(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="add_menu_title">메뉴명</label>
				<input
					type="text"
					name="title"
					id="add_menu_title"
					value={title}
					onChange={handleChangeTitle}
				/>
				<label htmlFor="add_menu_description">메뉴 설명</label>
				<input
					type="text"
					name="description"
					id="add_menu_description"
					value={description}
					onChange={handleChangeDescription}
				/>
				<label htmlFor="add_menu_score">호감도</label>
				<input
					type="number"
					name="score"
					id="add_menu_score"
					value={score}
					onChange={handleChangeScore}
				/>
				<input type="submit" value="완료" />
			</form>
		</div>
	);
}

export default MenuCreate;
