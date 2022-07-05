import { useEffect, useContext, useState } from "react";
import { get, del, put } from "../api";
import { cartContext } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineBrokenImage } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripePK } from "../config";
import EmptyCart from "../assets/Cart.svg";
import PaymentForm from "../components/PaymentForm";

const stripe = loadStripe(stripePK);
const appearance = {
	theme: "night",
	labels: "floating",
	variables: {
		colorPrimary: "#10b981",
		colorBackground: "#1e293b",
		colorText: "#64748b",
		colorDanger: "#df1b41",
		fontFamily: "Ideal Sans, system-ui, sans-serif",
		spacingUnit: "2px",
		borderRadius: "4px",
		// See all possible variables below
	},
};

export default function Cart() {
	const { items, setItems } = useContext(cartContext);
	const [modal, setModal] = useState(false);
	const [amount, setAmount] = useState(1);
	const [clientSecret, setClientSecret] = useState();
	const [total, setTotal] = useState(0);

	const handleTotal = () => {
		let totalAllProducts = 0;
		items?.map((item) => {
			totalAllProducts = totalAllProducts + item.price * item.amount;
		});
		setTotal(totalAllProducts.toFixed(2));
	};

	useEffect(() => {
		handleTotal();
	}, [handleTotal]);

	const changeAmount = (action) => {
		if (action === "add") {
			setAmount(amount + 1);
		} else if (action === "sub") {
			if (amount !== 1) {
				setAmount(amount - 1);
			}
		}
	};

	useEffect(() => {
		console.log(items);
		get("/api/cart/pay")
			.then((data) => {
				setClientSecret(data.clientSecret);
			})
			.catch(console.log);
	}, []);

	const update = (id, quantity) => {
		put("/api/cart/changeAmount", {
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
				handleTotal();
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
				setItems({
					type: "UPDATE",
					payload: data,
				});
				handleTotal();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			{items?.length !== 0 ? (
				<>
					{modal && (
						<div className="animate__animated animate__fadeIn fixed z-50 top-0 w-full min-h-screen flex justify-center items-center">
							<div
								className="absolute top-0 w-full min-h-screen bg-slate-900 opacity-70"
								onClick={() => {
									setModal(false);
								}}
							></div>

							<div className="animate__animated animate__fadeInDown z-50 w-3/4 md:w-1/3 bg-gray-900 rounded-lg">
								<MdClose
									className="absolute bg-emerald-500 rounded hover:bg-white hover:text-emerald-500 hover:cursor-pointer duration-300 w-8 top-2 right-2 h-auto"
									onClick={() => {
										setModal(false);
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
											{amount}
										</p>
										<button
											onClick={() => changeAmount("add")}
											className="h-8 flex justify-center items-center bg-emerald-500 rounded hover:bg-emerald-600 duration-200"
										>
											<AiOutlinePlus />
										</button>
										<button
											onClick={() => update(modal._id, amount)}
											className="h-10 col-span-5 bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600"
										>
											Update
										</button>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className="w-11/12 mt-20 flex justify-center items-center flex-col">
						<h2 className="text-xl mb-2">My Cart</h2>
						<p className="bg-emerald-500 rounded py-1 px-2 mb-2 self-start">{`Total: $ ${total}`}</p>

						<div className="flex flex-col md:flex-row md:items-start w-full">
							<div className="relative overflow-x-auto shadow-md rounded-lg w-full md:mr-5 md:w-2/3">
								<table className="w-full text-xs md:text-base text-left text-white">
									<thead className="bg-emerald-500 text-sm">
										<tr>
											<th className="p-2">Image</th>
											<th className="p-2">Name</th>
											<th className="p-2">Price</th>
											<th className="p-2">Unity</th>
											<th className="p-2">Total</th>
											<th className="p-2">Action</th>
										</tr>
									</thead>
									<tbody>
										{items?.map((item, index) => {
											return (
												<tr
													key={item._id}
													className={
														index % 2 === 0
															? "bg-slate-800 hover:bg-slate-600"
															: "bg-slate-700 hover:bg-slate-600"
													}
												>
													<td className="p-1">
														<img
															className="w-12 h-12 object-cover rounded"
															src={item.images[0]}
															alt={item.name}
														/>
													</td>
													<td className="p-1">{item.name}</td>
													<td className="p-1 text-slate-400">{`$ ${item.price}`}</td>
													<td className="p-1 text-slate-400">
														{item.amount}
													</td>
													<td className="p-1 text-slate-400">{`$ ${
														item.amount * item.price
													}`}</td>
													<td className="flex flex-col items-center md:flex-row md:h-14 ">
														<button onClick={() => remove(item._id)}>
															<MdDeleteOutline className="bg-red-600 my-1 md:mr-1 w-auto h-6 md:h-7 rounded hover:cursor-pointer hover:bg-red-500 duration-200" />
														</button>
														<button
															onClick={() => {
																setModal(item);
																setAmount(item.amount);
															}}
														>
															<MdEdit className="bg-blue-600 my-1 w-auto h-6 md:h-7 rounded hover:cursor-pointer hover:bg-blue-500 duration-200" />
														</button>
													</td>
												</tr>
											);
										})}
									</tbody>

									<tfoot className="bg-emerald-500 text-sm">
										<tr>
											<th className="p-2">Image</th>
											<th className="p-2">Name</th>
											<th className="p-2">Price</th>
											<th className="p-2">Unity</th>
											<th className="p-2">Total</th>
											<th className="p-2">Action</th>
										</tr>
									</tfoot>
								</table>
							</div>

							{/* Provider */}
							{clientSecret && (
								<Elements
									options={{
										clientSecret,
										appearance,
									}}
									stripe={stripe}
								>
									<PaymentForm />
								</Elements>
							)}
						</div>
					</div>
				</>
			) : (
				<div className="animate__animated animate__fadeInDown w-11/12 min-h-screen flex justify-center items-center flex-col">
					<img className="w-96" src={EmptyCart} alt="empty cart" />
					<p className="mt-4 text-slate-400 text-xl">Oops! Your cart is empty :(</p>
				</div>
			)}
		</>
	);
}
