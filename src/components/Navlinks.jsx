import { Link } from "react-router-dom";

export default function Navlinks() {
	return (
		<nav>
			<ul className="bg-slate-600">
				<li><Link to={"/"} className="">Home</Link></li>
				<li><Link to={"/login"} className="">Login</Link></li>
				<li><Link to={"/signup"} className="">Sign Up</Link></li>
			</ul>
		</nav>
	);
}
