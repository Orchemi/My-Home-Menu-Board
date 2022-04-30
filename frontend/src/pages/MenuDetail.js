import { useParams } from "react-router-dom";

function MenuDetail() {
	const { id } = useParams();
	console.log(x);

	return (
		<div>
			<h1>MenuDetail</h1>
		</div>
	);
}

export default MenuDetail;
