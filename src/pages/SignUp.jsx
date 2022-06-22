import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../api/";
import { authContext } from "../context/AuthContext";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Errors from "../components/Errors";
import useInput from "../hooks/useInput";
import Logo from "../assets/Logo.svg";

export default function SignUp() {
	const { setUser } = useContext(authContext);
	const navigate = useNavigate();

	const [errors, setErrors] = useState({
		isError: false,
		errors: [],
	});

	const name = useInput("text","")
	const email = useInput("email", "")
	const password = useInput("password", "")

	const signup = (event) => {
		event.preventDefault();

		post("/api/auth/signup", {
			name: name.value,
			email: email.value,
			password: password.value,
		})
		.then(({ user }) => {
			setUser({ type: "SIGNUP", payload: user });
			navigate("/");
		})
		.catch((error) => {
			console.log(error);
			setErrors({
				isErrors: true,
				errors: error.errors.map((e) => e.message),
			});
		});
	};

	return (
		<div className="w-11/12 mt-20 flex justify-center items-center">
			<div className="w-11/12 md:w-1/3 flex flex-col">
			<img className="mb-4 w-24 h-auto flex self-center" src={Logo} alt="Logo" />
				<p className="flex justify-center mb-4 text-xl">Sign Up</p>
				<form onSubmit={signup}>
					<div className="relative mb-4">
						<input {...name} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border-1 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" " />
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
					</div>
					<div className="relative mb-4">
						<input {...email} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border-1 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" " />
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
					</div>
					<div className="relative mb-4">
						<input {...password} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border-1 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer" placeholder=" "/>
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
					</div>
					<button className="bg-emerald-500 mb-4 border-emerald-500 border-2 rounded flex items-center justify-center w-full h-10 hover:bg-emerald-600 duration-200 hover:border-emerald-600">
						Sign Up
					</button>
				</form>

				<span className="flex justify-center mb-4 text-slate-500">Or</span>

				<a className="h-10 mb-4 flex justify-center items-center bg-slate-800 rounded hover:bg-slate-700 duration-200" href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google"><FcGoogle className="w-6 h-auto mr-2" />	Google Sign Up </a>
				<a className="h-10 flex justify-center items-center bg-blue-600 rounded hover:bg-blue-700 duration-200"	href="https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook"><FaFacebookSquare className="w-6 h-auto mr-2" /> Facebook Sign Up </a>
			</div>
			<Errors errors={errors} />
		</div>
	)
}
