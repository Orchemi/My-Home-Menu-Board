import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddMenu from "./pages/AddMenu";
import Login from "./pages/Login";
import RandomMenu from "./pages/RandomMenu";
import MenuDetail from "./pages/MenuDetail";
import Nav from "./Nav";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} exact={true}></Route>
					<Route path='/menu/:id' element={<MenuDetail />}></Route>
					<Route path='/add-menu' element={<AddMenu />}></Route>
					<Route path='/random-menu' element={<RandomMenu />}></Route>
					<Route path='/login' element={<Login />}></Route>

					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
