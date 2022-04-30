import { Link } from "react-router-dom";
import { useState } from "react";
import "./AddMenu.css";

function AddMenu() {
	const [menuTitle, setMenuTitle] = useState("");
	const [menuDescription, setMenuDescription] = useState("");
	const [menuScore, setMenuScore] = useState(5);
	const [menuCategoryVal1, setMenuCategoryVal1] = useState("육류");
	const [menuCategoryVal2, setMenuCategoryVal2] = useState("한식");

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

	const onSubmit = (event) => {
		event.preventDefault();
		const addedMenu = {
			menuTitle,
			menuDescription,
			menuScore,
			menuCategoryVal1,
			menuCategoryVal2,
		};

		if (
			window.confirm(
				`메뉴를 등록하시겠습니까? \n\n[메뉴정보]\n메뉴설명 : ${menuDescription}\n메뉴평가 : ${menuScore}\n메뉴 카테고리1 : ${menuCategoryVal1}\n메뉴 카테고리2 : ${menuCategoryVal2}`
			)
		) {
			console.log(addedMenu);
			alert("등록되었습니다!");
			setMenuTitle("");
			setMenuDescription("");
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
					<input type='file' className='form-control-file' />
				</div>
				<input type='submit' value='추가' className='btn btn-primary btn-row' />
			</form>
		</div>
	);
}

export default AddMenu;
