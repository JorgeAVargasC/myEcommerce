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
		const baseStyle =
			"flex items-center h-full w-full rounded border-l-4 " +
			"md:w-20 md:h-2/3 md:justify-center md:border-0 md:border-b-2 md:rounded-sm";
		if (location.pathname === path) {
			return (
				`${baseStyle} border-white text-white ` +
				"md:border-emerald-500 md:text-emerald-500"
			);
		} else {
			return (
				`${baseStyle} border-slate-900 text-slate-500 hover:text-white duration-200 ` +
				"md:hover:border-emerald-500 md:hover:text-emerald-500"
			);
		}
	};

	return (
		<nav className="animate__animated animate__slideInRight md:animate-none z-10 bg-slate-900 w-full pt-16 min-h-full fixed top-0 left-0 flex justify-center md:pt-0 md:flex md:justify-center md:items-center md:z-auto md:relative md:h-full">
			<ul className="w-full md:flex md:h-full md:items-center">

				{logged && (
					<li className="h-14 flex items-center justify-center text-xl md:hidden md:mr-4">
						Hi, {user.name}
					</li>
				)}

				<li className="h-14 md:flex md:mr-4 md:justify-center md:items-center md:h-full">
					<Link to={"/"} className={activeLink("/")} onClick={() => setOpen(false)}>
						<HiHome className="w-8 h-auto mx-4 md:hidden" />
						Home
					</Link>
				</li>

				{!logged ? (
					<>
						<li className="mt-4 h-14 flex items-center justify-center md:mt-0 md:mr-4 md:h-full">
							<Link
								to={"/login"}
								className="md:w-28 md:h-2/3 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center w-11/12 h-3/4 hover:bg-emerald-500 hover:text-white duration-200"
								onClick={() => setOpen(false)}
							>
								Login
							</Link>
						</li>
						<li className="h-14 flex items-center justify-center md:h-full">
							<Link
								to={"/signup"}
								className="md:w-28 md:h-2/3 bg-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center w-11/12 h-3/4 hover:bg-emerald-600 duration-200 hover:border-emerald-600"
								onClick={() => setOpen(false)}
							>
								Sign Up
							</Link>
						</li>
					</>
				) : (
					<>
						<li className="h-14 md:flex md:mr-4 md:justify-center md:items-center md:h-full">
							<Link
								to={"/store"}
								className={activeLink("/store")}
								onClick={() => setOpen(false)}
							>
								<HiShoppingBag className="w-8 h-auto mx-4 md:hidden" />
								Store
							</Link>
						</li>
						<li className="h-14 md:flex md:mr-4 md:justify-center md:items-center md:h-full">
							<Link
								to={"/cart"}
								className={activeLink("/cart")}
								onClick={() => setOpen(false)}
							>
								<HiShoppingCart className="w-8 h-auto mx-4 md:hidden" />
								Cart
							</Link>
						</li>

						{logged && (
							<li className="h-14 md:flex items-center justify-center md:mr-4 hidden">
								Hi, {user.name}
							</li>
						)}

						<li className="h-14 flex items-center justify-center md:h-full">
							<button
								className="md:w-28 md:h-2/3 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center w-11/12 h-3/4 hover:bg-emerald-500 hover:text-white duration-200"
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
