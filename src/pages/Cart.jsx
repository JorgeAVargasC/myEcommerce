import { useEffect, useContext } from "react";
import { del, get } from "../api";
import { cartContext } from "../context/CartContext";

export default function Cart() {
	const { items, setItems } = useContext(cartContext);	

	// useEffect(() => {
	// 	get("/api/cart")
	// 		.then((data) => {
	// 			console.log(data);
	// 			setItems({
	// 				type: "UPDATE",
	// 				payload: data,
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }, [setItems]);

	return (
		<div className="w-11/12 mt-20  flex justify-center items-center flex-col">
			<h1>Cart</h1>
			<p>Items: {items.length}</p>
			<button >
				Clear Cart
			</button>

			<table className="w-full bg-emerald-500 rounded text-left">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Amount</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
				{items?.map((item) => {
					return (
						<tr key={item._id} className="bg-slate-800">
							<td><img className="w-8 h-auto" src={item.images[0]} alt={item.name} /></td>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.amount}</td>
							<td>{item.amount * item.price}</td>
							<td></td>
						</tr>
					);
				})}
				</tbody>

				{/* <tfoot>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Amount</th>
						<th>Action</th>
					</tr>
				</tfoot> */}
				
			</table>
		</div>
	);
}
