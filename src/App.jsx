import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
	return (
		<div className="App bg-slate-900 min-h-screen text-white flex items-center flex-col w-full">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}
