import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import NavbarProvider from "./context/NavbarContext";

export default function App() {
	return (
		<div className="App bg-slate-900 min-h-screen text-white flex items-center flex-col w-full">
			<Router>
				<NavbarProvider>
					<Navbar />
				</NavbarProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/store" element={<Store />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</div>
	);
}
