import { useContext, useEffect, useRef, useState } from "react";
import { get, post, del } from "../api";
import { MdOutlineBrokenImage } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { cartContext } from "../context/CartContext";

export default function Store() {
	const [products, setProducts] = useState([]);
	const [amount, setAmount] = useState(1);
	const [modal, setModal] = useState(false);
	const { items, setItems } = useContext(cartContext);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [pages, setPages] = useState([]);
	const searchRef = useRef();

	const refLimit = useRef();

	const openModal = (id) => {
		setModal(products.find((product) => product._id === id));
		console.log(id);
	};

	const changePage = (action) => {
		if (action === "add") {
			setPage(page + 1);
		} else if (action === "sub") {
			if (page !== 1) {
				setPage(page - 1);
			}
		}
	};

	const changeAmount = (action) => {
		if (action === "add") {
			setAmount(amount + 1);
		} else if (action === "sub") {
			if (amount !== 1) {
				setAmount(amount - 1);
			}
		}
	};

	const handlePage = (p) => {
		setPage(p);
	};

	useEffect(() => {
		get("/api/cart")
			.then((data) => {
				setItems({
					type: "UPDATE",
					payload: data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setItems]);

	useEffect(() => {
		get(`/api/products/?page=${page}&limit=${limit}`)
			.then(({ data, total }) => {
				setProducts(data);
				setPages([...Array(Math.ceil(total / limit)).keys()].map((n) => n + 1));
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setProducts, limit, page, setLimit]);

	const add = (id, quantity) => {
		post("/api/cart/add", {
			idProduct: id,
			amount: quantity,
		})
			.then((data) => {
				console.log(data);
				setItems({
					type: "UPDATE",
					payload: data,
				});
				setModal(false);
				setAmount(1);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const remove = (id) => {
		del("/api/cart/remove", {
			idProduct: id,
		})
			.then((data) => {
				console.log(data);
				setItems({
					type: "UPDATE",
					payload: data,
				});
				setModal(false);
				setAmount(1);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const generalSearch = () => {
		var productsFilter = [];

		console.log(products);
		console.log(searchRef.current.value);
		products.filter((product) => {
			if (searchRef.current.value !== "") {
				if (product.name.toLowerCase().includes(searchRef.current.value.toLowerCase())) {
					productsFilter.push(product);
				}
			}
		});

		if (productsFilter.length !== 0) {
			setProducts(productsFilter);
		} else {
			get(`/api/products/?page=${page}&limit=${limit}`)
				.then(({ data, total }) => {
					setProducts(data);
					setPages([...Array(Math.ceil(total / limit)).keys()].map((n) => n + 1));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<>
			{modal && (
				<div className="animate__animated animate__fadeIn fixed z-50 top-0 w-full min-h-screen flex justify-center items-center">
					<div
						className="absolute top-0 w-full min-h-screen bg-slate-900 opacity-70"
						onClick={() => {
							setModal(false);
							setAmount(1);
						}}
					></div>

					<div className="animate__animated animate__fadeInDown z-50 w-3/4 md:w-1/3 bg-gray-900 rounded-lg">
						<MdClose
							className="absolute bg-emerald-500 rounded hover:bg-white hover:text-emerald-500 hover:cursor-pointer duration-300 w-8 top-2 right-2 h-auto"
							onClick={() => {
								setModal(false);
								setAmount(1);
							}}
						/>
						{modal.images[0] ? (
							<img
								src={modal.images[0]}
								className="rounded-lg w-full h-64 object-cover"
								alt={modal.name}
							/>
						) : (
							<div className="flex flex-col justify-center items-center rounded-lg h-64 bg-emerald-500">
								<MdOutlineBrokenImage className="w-1/3 h-auto" />
								<p className="text-lg">Oops!</p>
							</div>
						)}

						<div className="flex flex-col p-4 h-full justify-between">
							<p className="mb-1">{modal.name}</p>
							<p className="mb-2 text-white bg-emerald-500 px-2 rounded-full w-fit">{`$ ${modal.price}`}</p>
							<p className="mb-2 max-h-32 text-slate-400 overflow-y-scroll pr-4 text-justify">
								{modal.description}
							</p>
							<div className="grid grid-cols-5 gap-2">
								<button
									onClick={() => changeAmount("sub")}
									className="h-8 flex justify-center items-center bg-emerald-500 rounded hover:bg-emerald-600 duration-200"
								>
									<AiOutlineMinus />
								</button>
								<p className="bg-slate-700 col-span-3 h-full rounded flex justify-center items-center">
									{items?.some((item) => item._id === modal._id)
										? items?.find((item) => item._id === modal._id).amount
										: amount}
								</p>
								<button
									onClick={() => changeAmount("add")}
									className="h-8 flex justify-center items-center bg-emerald-500 rounded hover:bg-emerald-600 duration-200"
								>
									<AiOutlinePlus />
								</button>

								{items?.some((item) => item._id === modal._id) ? (
									<button
										onClick={() => remove(modal._id)}
										className="h-10 col-span-5 bg-red-500 border-red-500 border-2 rounded flex items-center justify-center hover:bg-red-600 duration-200 hover:border-red-600"
									>
										Remove
									</button>
								) : (
									<button
										onClick={() => add(modal._id, amount)}
										className="h-10 col-span-5 bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600"
									>
										Add to cart
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="w-11/12 mt-20 mb-20 flex flex-col justify-center items-center">
				<div className="p-5 w-full flex flex-col items-center justify-center rounded-lg mb-4 bg-gradient-to-r from-green-400 to-blue-500">
					<h2 className="text-2xl mb-4">Store</h2>
					<div className="relative w-full md:w-1/2">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
						<input
							ref={searchRef}
							onChange={() => generalSearch()}
							className="block p-3 pl-10 w-full text-slate-800 rounded-md outline-none"
							placeholder="Search Mockups, Logos..."
						/>
					</div>
				</div>

				<div className="md:h-10 flex flex-col items-center w-full md:flex-row md:justify-between mb-4">
					<div className="flex flex-row items-center md:justify-center mb-4 md:mb-0">
						<p className="mr-4">Limit: </p>
						<select
							ref={refLimit}
							onClick={() => setLimit(refLimit.current.value)}
							className="h-10 rounded bg-slate-900"
						>
							<option value={10}>10</option>
							<option value={15}>15</option>
							<option value={20}>20</option>
						</select>
					</div>

					<nav className="h-10 bg-slate-800 flex items-center justify-center border rounded border-slate-700 text-slate-500">
						<button
							onClick={() => changePage("sub")}
							className="h-full px-3 border-r border-slate-700 hover:text-white duration-200"
						>
							<IoIosArrowBack />
						</button>

						{pages.map((p) => (
							<button
								key={p}
								onClick={() => handlePage(p)}
								className={`h-full px-3 border-r border-slate-700 hover:text-white duration-200  ${
									p === page && "bg-emerald-500 text-white"
								}`}
							>
								{p}
							</button>
						))}

						<button
							onClick={() => changePage("add")}
							className="h-full px-3 border-slate-700 hover:text-white duration-200"
						>
							<IoIosArrowForward />
						</button>
					</nav>
				</div>

				<div className="w-full grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
					{products.map((product) => {
						return (
							<div
								key={product._id}
								className="item rounded-lg flex flex-col justify-between bg-slate-800 hover:scale-105 duration-200"
							>
								{product.images[0] ? (
									<img
										src={product.images[0]}
										className="rounded-lg w-full h-40 object-cover hover:cursor-pointer"
										onClick={() => openModal(product._id)}
										alt={product.name}
									/>
								) : (
									<div
										onClick={() => openModal(product._id)}
										className="flex flex-col justify-center items-center rounded-lg h-40 bg-emerald-500 hover:cursor-pointer"
									>
										<MdOutlineBrokenImage className="w-1/3 h-auto" />
										<p className="text-lg">Oops!</p>
									</div>
								)}

								<div className="flex flex-col p-4">
									<p className="mb-1">{product.name}</p>
									<p className="mb-2 text-white bg-emerald-500 px-2 rounded-full w-fit">{`$ ${product.price}`}</p>

									{items?.some((item) => item._id === product._id) ? (
										<button
											onClick={() => remove(product._id)}
											className="h-10 bg-red-500 border-red-500 border rounded flex items-center justify-center hover:bg-red-600 duration-200 hover:border-red-600"
										>
											Remove
										</button>
									) : (
										<button
											onClick={() => openModal(product._id)}
											className="h-10 bg-emerald-500 border-emerald-500 border rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600"
										>
											Add to cart
										</button>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
