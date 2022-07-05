import { useContext } from "react";
import { useNavigate } from "react-router";
import ImgHome from "../assets/Home.svg";
import { authContext } from "../context/AuthContext";

export default function Home() {
	const { logged } = useContext(authContext);

	const navigate = useNavigate();

	const redirection = () => {
		logged ? navigate("/store") : navigate("/login");
	};

	return (
		<div className="w-11/12 min-h-screen flex justify-center items-center md:justify-start">
			<div className="flex flex-col items-center justify-center md:items-start md:w-1/3">
				<p className="animate__animated animate__fadeInDown text-lg">Hey! Welcome to my...</p>
				<h1 className="animate__animated animate__fadeInDown text-center text-xl md:text-4xl text-emerald-400 mb-4">
					E-commerce
				</h1>
				<img
					className="animate__animated animate__fadeInDown w-3/4 md:w-6/12 md:absolute md:right-20 md:top-28 mb-4"
					src={ImgHome}
					alt="ImgHome"
				/>
				<button
					onClick={() => redirection()}
					className="animate__animated animate__fadeInDown md:order-last bg-emerald-500 mb-4 border-emerald-500 border-2 rounded flex items-center justify-center px-6 py-2 hover:bg-emerald-600 duration-200 hover:border-emerald-600"
				>
					Get Started!
				</button>
				<p className="animate__animated animate__fadeInDown text-slate-500 md:mb-4 text-center md:text-left">
					Shop MyEcommerce.com today for{" "}
					<span className="text-emerald-400">Every Day Low Prices.</span> Join Ecommerce+
					for unlimited free delivery from your store &{" "}
					<span className="text-emerald-400">free shipping</span> with no order minimum.
				</p>
			</div>
		</div>
	);
}
