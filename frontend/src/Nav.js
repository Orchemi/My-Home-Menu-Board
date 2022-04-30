import { Link } from "react-router-dom";
import "./Nav.css";
import Button from "react-bootstrap/Button";

function Nav() {
	const clickHamburger = (event) => {
		console.log("hello");
	};

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
					{/* <img src='img/dice.png' alt='random dice' id='randomDice' /> &nbsp; */}
					<span>랜덤 메뉴 추천</span>
				</Link>
				|
				<Link to='/login' className='nav-item'>
					LOGIN
				</Link>
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