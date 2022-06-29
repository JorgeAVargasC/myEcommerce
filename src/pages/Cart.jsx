import { useContext } from "react";
import { cartContext } from "../context/CartContext";

export default function Cart() {

	const {items} = useContext(cartContext)

	return (
		<div className="w-11/12 mt-20 bg-slate-700 flex justify-center items-center flex-col">
			<h1>Cart</h1>
			<p>Items: {items}</p>
		</div>
	);
}
