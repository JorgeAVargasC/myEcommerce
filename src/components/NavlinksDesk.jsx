import { Link, useLocation } from "react-router-dom";

export default function NavlinksDesk() {

	const location = useLocation()

	const activeLink = (path) => {
		const baseStyle = "w-20 h-full flex justify-center items-center border-b-4 rounded";
		if (location.pathname === path) {
			return `${baseStyle} border-emerald-500 text-emerald-500`;
		} else {
			return `${baseStyle} border-slate-900 text-slate-500`;
		}
	}

	return (
		<nav className="h-full w-full flex justify-center items-center">
			<ul className="flex h-full items-center">
				<li className="flex mr-4 h-full">
					<Link
						to={"/"}
						className={activeLink("/")}
					>
						Home
					</Link>
				</li>
				<li className="flex mr-4 h-full">
					<Link
						to={"/store"}
						className={activeLink("/store")}
					>
						Store
					</Link>
				</li>
				<li className="flex mr-4 h-full">
					<Link
						to={"/cart"}
						className={activeLink("/cart")}
					>
						Cart
					</Link>
				</li>
				<li className="flex mr-4 justify-center items-center h-full">
					<Link
						to={"/login"}
						className="w-28 h-2/3 flex justify-center items-center border-2 border-emerald-500 text-emerald-500 rounded"
					>
						Login
					</Link>
				</li>
				<li className="flex justify-center items-center h-full">
					<Link
						to={"/signup"}
						className="w-28 h-2/3 flex justify-center items-center border-2 border-emerald-500 bg-emerald-500 rounded"
					>
						Sign Up
					</Link>
				</li>
			</ul>
		</nav>
	);
}
