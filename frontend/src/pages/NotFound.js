import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className='container'>
			<div
				style={{
					backgroundImage: "url(/img/not-ready.gif)",
					backgroundSize: "cover",
					width: "100%",
					height: "700px",
				}}
			></div>
		</div>
	);
}

export default NotFound;
