import { useState, useRef } from "react";
import "./AddMenu.css";
import axios from "axios";

function AddMenu() {
	const URL = "http://127.0.0.1:8000/api/menus";
	const [menuTitle, setMenuTitle] = useState("");
	const [menuDescription, setMenuDescription] = useState("");
	const [menuScore, setMenuScore] = useState(5);
	const [menuCategoryVal1, setMenuCategoryVal1] = useState("육류");
	const [menuCategoryVal2, setMenuCategoryVal2] = useState("한식");
	const formData = new FormData();
	// const [menuImage, setMenuImage] = useState("");
	const imgInput = useRef();

	const onChangeMenuTitle = (event) => {
		setMenuTitle(event.target.value);
	};

	const onChangeMenuDescription = (event) => {
		setMenuDescription(event.target.value);
	};

	const onChangeMenuCategoryVal1 = (event) => {
		setMenuCategoryVal1(event.target.value);
	};

	const onChangeMenuCategoryVal2 = (event) => {
		setMenuCategoryVal2(event.target.value);
	};

	const onChangeMenuScore = (event) => {
		setMenuScore(event.target.value);
	};

	const onChangeMenuImage = (event) => {
		// formData.delete();
		formData.append("file", event.target.files[0]);
		// console.log(formData);
		for (const keyValue of formData) console.log(keyValue);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		formData.append("title", menuTitle);
		formData.append("description", menuDescription);
		formData.append("score", menuScore);
		formData.append("category1", menuCategoryVal1);
		formData.append("category2", menuCategoryVal2);
		for (const keyValue of formData) {
			console.log(keyValue);
		}

		if (window.confirm("메뉴를 등록하시겠습니까?")) {
			// 서버 요청
			// axios({
			// 	url: URL,
			// 	headers: {
			// 		// "X-CSRFToken": csrftoken,
			// 		"Content-Type": "application/json",
			// 	},
			// 	method: "post",
			// 	data: formData,
			// });

			// 등록 안내
			alert("등록되었습니다!");

			// 폼 초기화
			setMenuTitle("");
			setMenuDescription("");
			// setMenuImage("");
			setMenuScore(5);
		} else {
			alert("취소되었습니다!");
		}
	};

	return (
		<div>
			<h1 className='subtitle'>메뉴 추가</h1>

			<form action='' className='form80' id='menuAddForm' onSubmit={onSubmit}>
				<input
					type='text'
					className='form-control'
					placeholder='메뉴명을 입력하세요.'
					value={menuTitle}
					onChange={onChangeMenuTitle}
				/>

				<textarea
					type='text'
					className='form-control'
					placeholder='메뉴 설명을 입력하세요.'
					rows='3'
					value={menuDescription}
					onChange={onChangeMenuDescription}
				/>

				<select
					value={menuCategoryVal1}
					onChange={onChangeMenuCategoryVal1}
					className='form-control menu-category1'
				>
					<option value='육류'>육류</option>
					<option value='어류'>어류</option>
					<option value='채소류'>채소류</option>
					<option value='반찬류'>반찬류</option>
				</select>

				<select
					value={menuCategoryVal2}
					onChange={onChangeMenuCategoryVal2}
					className='form-control menu-category2'
				>
					<option value='한식'>한식</option>
					<option value='중식'>중식</option>
					<option value='일식'>일식</option>
					<option value='양식'>양식</option>
				</select>

				<input
					type='number'
					max='5'
					min='1'
					step='1'
					className='form-control'
					placeholder='평가점수를 입력하세요.'
					value={menuScore}
					onChange={onChangeMenuScore}
				/>

				<div className='input-file-space'>
					<input
						type='file'
						className='form-control-file'
						accept='image/*' // image 확장자만 선택적으로 업로드
						ref={imgInput}
						onChange={onChangeMenuImage}
					/>
				</div>
				<input type='submit' value='추가' className='btn btn-primary btn-row' />
			</form>
		</div>
	);
}

export default AddMenu;
