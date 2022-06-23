import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HiShoppingBag } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import { navbarContext } from "../context/NavbarContext";
import { authContext } from "../context/AuthContext";
import { get } from "../api";
import "animate.css";

export default function Navlinks() {
	const { user, logged, setUser } = useContext(authContext);
	const { setOpen } = useContext(navbarContext);
	const location = useLocation();

	const navigate = useNavigate();

	const logout = () => {
		get("/api/auth/logout").then((result) => {
			console.log(result);
			setUser({ type: "LOGOUT" });
			navigate("/");
		});
	};

	const activeLink = (path) => {
		const baseStyle = "flex items-center h-full w-full rounded border-l-4";
		if (location.pathname === path) {
			return `${baseStyle} border-white text-white`;
		} else {
			return `${baseStyle} border-slate-900 text-slate-500 hover:text-white duration-200`;
		}
	};

	return (
		<nav className="animate__animated animate__slideInRight z-10 bg-slate-900 w-full pt-16 min-h-full fixed top-0 left-0 flex justify-center">
			<ul className="w-full">

				{
					logged && 
					<>
						<li className="h-14 flex items-center justify-center text-xl">Hi, {user.name}</li>
					</>
				}

				<li className="h-14">
					<Link to={"/"} className={activeLink("/")} onClick={() => setOpen(false)}>
						<HiHome className="w-8 h-auto mx-4" />
						Home
					</Link>
				</li>

				{!logged ? (
					<>
						<li className="mt-4 h-14 flex items-center justify-center">
							<Link
								to={"/login"}
								className="text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center w-11/12 h-3/4 hover:bg-emerald-500 hover:text-white duration-200"
								onClick={() => setOpen(false)}
							>
								Login
							</Link>
						</li>
						<li className="h-14 flex items-center justify-center">
							<Link
								to={"/signup"}
								className="bg-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center w-11/12 h-3/4 hover:bg-emerald-600 duration-200 hover:border-emerald-600"
								onClick={() => setOpen(false)}
							>
								Sign Up
							</Link>
						</li>
					</>
				) : (
					<>
						<li className="h-14">
							<Link
								to={"/store"}
								className={activeLink("/store")}
								onClick={() => setOpen(false)}
							>
								<HiShoppingBag className="w-8 h-auto mx-4" />
								Store
							</Link>
						</li>
						<li className="h-14">
							<Link
								to={"/cart"}
								className={activeLink("/cart")}
								onClick={() => setOpen(false)}
							>
								<HiShoppingCart className="w-8 h-auto mx-4" />
								Cart
							</Link>
						</li>
						<li className="h-14 flex items-center justify-center">
							<button className="text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center w-11/12 h-3/4 hover:bg-emerald-500 hover:text-white duration-200" onClick={logout}>Log out</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
