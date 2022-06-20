import { useContext } from "react";
import Navlinks from "./Navlinks";
import NavlinksDesk from "./NavlinksDesk";
import { Spin as Hamburger } from "hamburger-react";
import { navbarContext } from "../context/NavbarContext";

export default function Navbar() {

	const {isOpen, setOpen} = useContext(navbarContext);

	return (
		<div className="bg-slate-900 h-16 w-full flex justify-center fixed">
			<div className="flex justify-between items-center w-11/12">

				<h1 className="z-10">Logo</h1>

				{/* Mobile Navigation */}
				<div className="md:hidden z-10">
					<Hamburger rounded toggled={isOpen} toggle={setOpen} direction="left" duration={0.4} size={32}/>
				</div>
				
				<div className="fixed w-full">
					{isOpen && <Navlinks />}
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:block h-full">
					<NavlinksDesk />
				</div>			
			</div>
		</div>
	);
}
