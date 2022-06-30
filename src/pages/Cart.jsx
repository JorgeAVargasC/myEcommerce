import { useEffect, useContext } from "react";
import { del, get } from "../api";
import { cartContext } from "../context/CartContext";

export default function Cart() {
	const { items, setItems } = useContext(cartContext);

	// del("/api/cart/remove",{
	// 	idProduct:"62ba18db0b4c742f9af79645"
	// })
	// .then(data => {
	// 	console.log(data)
	// })
	

	useEffect(() => {
		get("/api/cart")
			.then((data) => {
				console.log(data);
				setItems({
					type: "UPDATE",
					payload: data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, [setItems]);

	return (
		<div className="w-11/12 mt-20 bg-slate-700 flex justify-center items-center flex-col">
			<h1>Cart</h1>
			{/* <p>Items: {items.length}</p> */}
			<button >
				Clear Cart
			</button>

			<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Amount</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
				{/* {items.map((item, index) => {
					return (
						<tr>
							<td><img className="w-8 h-auto" src={item.images[0]} alt={item.name} /></td>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.amount}</td>
							<td></td>
						</tr>
					);
				})} */}
				</tbody>

				
			</table>
		</div>
	);
}
