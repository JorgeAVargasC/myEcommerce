import React from "react";
import useInput from "../hooks/useInput";
import { post } from "../api";

export default function Create() {
	const name = useInput("text", "");
	const description = useInput("text", "");
	const url = useInput("text", "");
	const price = useInput("number", "");
	const stock = useInput("number", "");

	const create = (event) => {
		event.preventDefault();

		post("/api/products", {
			name: name.value,
			description: description.value,
			url: url.value,
			price: price.value,
			stock: stock.value,
		})
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="w-11/12 mt-20 flex justify-center items-center">
			<div className="animate__animated animate__fadeInDown w-11/12 md:w-1/3 mb-4 flex flex-col">
				<p className="flex justify-center mb-4 text-xl">Create Product</p>
				<form onSubmit={create}>
					<div className="relative mb-4">
						<input
							{...name}
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Name
						</label>
					</div>

					<div className="relative mb-4">
						<textarea
							{...description}
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Description
						</label>
					</div>

					<div className="relative mb-4">
						<input
							{...url}
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Product Photo URL
						</label>
					</div>

					<div className="relative mb-4">
						<input
							{...price}
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Price
						</label>
					</div>

					<div className="relative mb-4">
						<input
							{...stock}
							min={1}
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Stock
						</label>
					</div>
					<button className="bg-emerald-500 mb-4 border-emerald-500 border-2 rounded flex items-center justify-center w-full h-10 hover:bg-emerald-600 duration-200 hover:border-emerald-600">
						Create
					</button>
				</form>
			</div>
		</div>
	);
}
