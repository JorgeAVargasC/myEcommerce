import Torre from "../assets/torre.jpg";

export default function Store() {
	return (
		<div className="w-11/12 mt-20 mb-20 flex flex-col justify-center items-center">			

			<h1 className="mb-4">Store</h1>

			<div className="w-full grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
				<div className="item rounded-lg flex flex-col justify-center bg-slate-800">
					<img src={Torre} className="rounded-lg" alt="Torre" />
					<div className="flex flex-col p-4">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
							View More
						</button>
						<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
							Add to cart
						</button>
					</div>
				</div>

				<div className="item rounded-lg flex flex-col justify-center bg-slate-800">
					<img src={Torre} className="rounded-lg" alt="Torre" />
					<div className="flex flex-col p-4">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
							View More
						</button>
						<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
							Add to cart
						</button>
					</div>
				</div>

				<div className="item rounded-lg flex flex-col justify-center bg-slate-800">
					<img src={Torre} className="rounded-lg" alt="Torre" />
					<div className="flex flex-col p-4">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
							View More
						</button>
						<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
							Add to cart
						</button>
					</div>
				</div>

				<div className="item rounded-lg flex flex-col justify-center bg-slate-800">
					<img src={Torre} className="rounded-lg" alt="Torre" />
					<div className="flex flex-col p-4">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
							View More
						</button>
						<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
							Add to cart
						</button>
					</div>
				</div>

				<div className="item rounded-lg flex flex-col justify-center bg-slate-800">
					<img src={Torre} className="rounded-lg" alt="Torre" />
					<div className="flex flex-col p-4">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
							View More
						</button>
						<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
							Add to cart
						</button>
					</div>
				</div>

				<div className="item rounded-lg flex flex-col justify-center bg-slate-800">
					<img src={Torre} className="rounded-lg" alt="Torre" />
					<div className="flex flex-col p-4">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
							View More
						</button>
						<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
							Add to cart
						</button>
					</div>
				</div>

				<div className="item rounded-lg flex flex-col justify-center bg-slate-800">
					<img src={Torre} className="rounded-lg" alt="Torre" />
					<div className="flex flex-col p-4">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
							View More
						</button>
						<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
