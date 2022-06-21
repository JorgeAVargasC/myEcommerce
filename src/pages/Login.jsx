import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../api/";
import { authContext } from "../context/AuthContext";

export default function Login() {
	const { setUser } = useContext(authContext);
	const navigate = useNavigate();
	const [errors, setErrors] = useState({
		isError: false,
		errors: [],
	});

	// const login = (e) => {
	// 	e.preventDefault();

	// 	post("/api/auth/login", data).then(({user})=>{
	// 		setUser({type:'LOGIN', payload:user})
	// 		navigate("/")
	// 	})

	// }

	return (
		<div className="w-11/12 min-h-screen flex justify-center items-center">
			<div className="w-11/12 md:w-1/3">
				<div className="relative mb-4">
					<input
						type="text"
						className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border-1 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
						placeholder=" "
					/>
					<label
						for="floating_outlined"
						className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
					>
						Email
					</label>
				</div>

				<div className="relative mb-4">
					<input
						type="text"
						className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border-1 border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
						placeholder=" "
					/>
					<label
						for="floating_outlined"
						className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
					>
						Password
					</label>
				</div>

				<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center w-full h-10 hover:bg-emerald-600 duration-200 hover:border-emerald-600">
					Login
				</button>
			</div>
		</div>
	);
}
