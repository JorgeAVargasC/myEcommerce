import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { post } from "../api";
import Logo from "../assets/Logo.svg";
import {IoMdClose} from "react-icons/io"

export default function Create() {
	const name = useInput("text", "");
	const description = useInput("text", "");
	// const url = useInput("text", "");
	const price = useInput("number", "");
	const stock = useInput("number", "");
	const MySwal = withReactContent(Swal);

	const [inputURL, setInputURL] = useState("");

	// Input Field handler
	const handleInputURL = (e) => {
		setInputURL(e.target.value);
	};

	// Reset Input Field handler
	const resetInputField = () => {
		setInputURL("");
	};

	const [imagesURL, setImagesURL] = useState([]);

	const navigate = useNavigate();

	const addImage = () => {
		if (inputURL !== "" && !imagesURL.some(n => n===inputURL)) {

			if(inputURL.includes(" ")){
				inputURL.split(" ").map(url => {
					imagesURL.push(url)
				})
			}else{
				imagesURL.push(inputURL);
			}
			setImagesURL([...imagesURL]);	
		}
		resetInputField();
	};

	const removeURL = (url) => {
		console.log(url)
		setImagesURL(imagesURL.filter(img => img !== url))
	}

	const create = (event) => {
		event.preventDefault();

		MySwal.fire({
			title: "Loading",
			didOpen: () => {
				MySwal.showLoading();
			},
		});

		post("/api/products", {
			name: name.value,
			description: description.value,
			images: imagesURL,
			price: price.value,
			stock: stock.value,
		})
			.then((res) => {
				MySwal.fire({
					icon: "success",
					title: `Product Added`,
					showConfirmButton: false,
					timer: 2000,
				});
				navigate("/store");
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
					footer: error,
					// footer: error.errors.map((e) => e.message),
				});
			});
	};
	return (
		<div className="w-11/12 mt-20 flex justify-center items-center">
			<div className="animate__animated animate__fadeInDown w-11/12 md:w-1/3 mb-4 flex flex-col ">
				<img className="mb-4 w-20 self-center h-auto" src={Logo} alt="Logo" />
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

					<div className="relative mb-2">
						<input
							type="text"
							value={inputURL}
							onChange={handleInputURL}
							onBlur={() => {
								addImage();
								resetInputField();
							}}
							className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded border border-slate-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-500 peer"
							placeholder=" "
						/>
						<label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-emerald-500 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
							Product Photo URL
						</label>
					</div>
					<div className="mb-2 flex flex-row flex-wrap">
						{imagesURL?.map((url, index) => (
							<div className="animate__animated animate__bounceIn bg-slate-800 p-1 mr-2 mb-2 rounded flex items-center" key={index}>
								<IoMdClose 
								onClick={()=>removeURL(url)}
								className="mr-2 w-5 h-auto text-slate-400 hover:cursor-pointer hover:text-white duration-200"/>
								<img className="w-auto h-6 rounded" src={url} />
							</div>
						))}
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
					<button className=" bg-emerald-500 mb-4 border-emerald-500 border-2 rounded flex items-center justify-center w-full h-10 hover:bg-emerald-600 duration-200 hover:border-emerald-600">
						Create
					</button>
				</form>
			</div>
		</div>
	);
}
