import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { get } from "../api";
import { authContext } from "../context/AuthContext";

export default function NavlinksDesk() {
	const { user, logged, setUser } = useContext(authContext);
	const navigate = useNavigate();
	const location = useLocation();

	const logout = () => {
		get("/api/auth/logout").then((result) => {
			console.log(result);
			setUser({ type: "LOGOUT" });
			navigate("/");
		});
	};

	const activeLink = (path) => {
		const baseStyle = "w-20 h-2/3 flex justify-center items-center border-b-2 rounded-sm";
		if (location.pathname === path) {
			return `${baseStyle} border-emerald-500 text-emerald-500`;
		} else {
			return `${baseStyle} border-slate-900 text-slate-500 hover:border-emerald-500 hover:text-emerald-500 duration-200`;
		}
	};

	return (
		<nav className="h-full w-full flex justify-center items-center">
			<ul className="flex h-full items-center">
				<li className="flex mr-4 justify-center items-center h-full">
					<Link to={"/"} className={activeLink("/")}>
						Home
					</Link>
				</li>

				{!logged ? (
					<>
						<li className="flex mr-4 justify-center items-center h-full">
							<Link
								to={"/login"}
								className="w-28 h-2/3 flex justify-center items-center border-2 border-emerald-500 text-emerald-500 rounded hover:bg-emerald-500 hover:text-white duration-200"
							>
								Login
							</Link>
						</li>
						<li className="flex justify-center items-center h-full">
							<Link
								to={"/signup"}
								className="w-28 h-2/3 flex justify-center items-center border-2 border-emerald-500 bg-emerald-500 rounded hover:bg-emerald-600 duration-200 hover:border-emerald-600"
							>
								Sign Up
							</Link>
						</li>
					</>
				) : (
					<>
						<li className="flex mr-4 h-full">
							<Link to={"/store"} className={activeLink("/store")}>
								Store
							</Link>
						</li>
						<li className="flex mr-4 h-full">
							<Link to={"/cart"} className={activeLink("/cart")}>
								Cart
							</Link>
						</li>
						<li className="flex mr-4 h-full items-center border-b-4 rounded">
							Hi, {user.name}
						</li>
						<li className="flex justify-center items-center h-full">
							<button
								className="w-28 h-2/3 flex justify-center items-center border-2 border-emerald-500 text-emerald-500 rounded hover:bg-emerald-500 hover:text-white duration-200"
								onClick={logout}
							>
								Log out
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
