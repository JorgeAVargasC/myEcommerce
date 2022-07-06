import { useContext, useEffect, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { get } from "./api";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Store from "./pages/Store";
// import Cart from "./pages/Cart";
// import Create from "./pages/Create";

import NavbarProvider from "./context/NavbarContext";
import { authContext } from "./context/AuthContext";
import { cartContext } from "./context/CartContext";
import { MyProducts } from "./pages/MyProducts";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Store = lazy(() => import("./pages/Store"));
const Cart = lazy(() => import("./pages/Cart"));
const Create = lazy(() => import("./pages/Create"));

export default function App() {
	const { setUser } = useContext(authContext);
	const { setItems } = useContext(cartContext);
	// Recuperamos sesión del usuario
	useEffect(() => {
		get("/api/auth/validate")
			.then((result) => {
				setUser({ type: "LOGIN", payload: result.user });
				get("/api/cart")
					.then((data) => {
						setItems({
							type: "UPDATE",
							payload: data.items,
						});
					})
					.catch(console.log);
			})
			.catch((error) => console.log(error));
	}, [setUser, setItems]);

	return (
		<div className="App bg-slate-900 min-h-screen text-white flex items-center flex-col w-full">
			<Router>
				<NavbarProvider>
					<Navbar />
				</NavbarProvider>
				<Suspense fallback={<Loading/>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/store" element={<Store />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/create" element={<Create />} />
						<Route path="/myproducts" element={<MyProducts />} />
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
}
