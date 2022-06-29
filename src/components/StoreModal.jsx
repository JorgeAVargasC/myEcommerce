import React from "react";

export default function StoreModal({id}) {
	return (
		<div className="fixed z-50 top-0 w-full min-h-screen flex justify-center items-center">
			<div className="absolute top-0 w-full min-h-screen bg-slate-900 opacity-70"></div>
			<div className="z-50 w-3/4 md:max-h-96 md:flex md:flex-row bg-gray-900 rounded-lg">
				<img className="rounded-lg md:w-2/5 bg-cover" alt="Torre" />
				<div className="flex flex-col p-4 h-full justify-between">
					<p>Product Name</p>
					<p className="mb-2">$100.000</p>
					<p className="mb-2 max-h-52 overflow-y-scroll">
						
					</p>
					<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
