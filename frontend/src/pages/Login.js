// import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
	const [ID, setID] = useState("");
	const [PW, setPW] = useState("");

	const onChangeID = (event) => {
		setID(event.target.value);
	};

	const onChangePW = (event) => {
		setPW(event.target.value);
	};

	const onSubmitLogin = (event) => {
		event.preventDefault();
		const loginInfo = { ID, PW };
		console.log(loginInfo);
		setID("");
		setPW("");
	};

	return (
		<div>
			<h1 className='subtitle'>로그인</h1>

			<form
				action=''
				className='form50'
				id='LoginForm'
				onSubmit={onSubmitLogin}
			>
				<input
					type='text'
					className='form-control'
					placeholder='ID'
					value={ID}
					onChange={onChangeID}
				/>
				<input
					type='password'
					className='form-control'
					placeholder='PW'
					value={PW}
					onChange={onChangePW}
				/>
				<input
					type='submit'
					value='로그인'
					className='btn btn-secondary btn-row'
				/>
			</form>
		</div>
	);
}

export default Login;
