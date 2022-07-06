import React from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function PaymentForm() {
	const stripe = useStripe();
	const elements = useElements();
	const { setItems } = useContext(cartContext);
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);

	const pay = async (event) => {
		event.preventDefault();

		MySwal.fire({
			title: "Loading",
			didOpen: () => {
				MySwal.showLoading();
			},
		});

		const result = await stripe.confirmPayment({
			elements,
			redirect: "if_required",
		});

		console.log(result);

		if (result.paymentIntent.status === "succeeded") {
			setItems({
				type: "CLEAR",
			});
			MySwal.close();
			MySwal.fire({
				icon: "success",
				title: `Success`,
				showConfirmButton: false,
				timer: 2000,
			});
			navigate("/store");
		}
	};
	return (
		<div className="w-full mt-10 mb-20 flex items-center flex-col justify-center md:m-0 md:w-1/3">
			<form onSubmit={pay} className="w-full">
				<PaymentElement id="payment-element"></PaymentElement>
				<button className="h-10 w-full my-2 bg-emerald-500 border-emerald-500 border rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
					Pay
				</button>
			</form>
		</div>
	);
}
