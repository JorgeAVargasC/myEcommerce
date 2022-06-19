import Navlinks from "./Navlinks";

export default function Navbar() {
	return (
		<div className="bg-slate-800 w-full flex justify-center">
			<div className="flex justify-between items-center w-11/12">
				<h1>Logo</h1>
				<Navlinks />
			</div>
		</div>
	);
}
