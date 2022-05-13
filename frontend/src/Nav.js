import { Link } from "react-router-dom";
import "./Nav.css";
import Button from "react-bootstrap/Button";

function Nav() {
	const clickHamburger = (event) => {
		// console.log("hello");
	};
	const URL = "http://127.0.0.1:8000/api/accounts";

	return (
		<div id='Nav'>
			<Link to='/'>
				<img src='img/main_logo.png' alt='main logo' className='main-logo' />
			</Link>
			<div className='nav-items-wide'>
				<Link to='/add-menu' className='nav-item'>
					메뉴 추가
				</Link>
				|
				<Link to='/random-menu' className='nav-item'>
					<span>랜덤 메뉴 추천</span>
				</Link>
				|
				<a className='nav-item' href={`${URL}/login`}>
					LOGIN
				</a>
				/
				<a className='nav-item' href={`${URL}/logout`}>
					LOGOUT
				</a>
			</div>
			<div className='nav-items-narrow'>
				<span>
					<img
						src='img/hamburger.png'
						alt=''
						className='hamburger'
						onClick={clickHamburger}
					/>
				</span>
			</div>
		</div>
	);
}

export default Nav;
