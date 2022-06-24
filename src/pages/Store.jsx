import Torre from "../assets/torre.jpg";

export default function Store() {
	return (
		<div className="w-11/12 mt-20 mb-20 flex flex-col justify-center items-center">
			<div className="fixed z-50 top-0 w-full min-h-screen flex justify-center items-center">
				<div className="absolute top-0 w-full min-h-screen bg-slate-900 opacity-70"></div>
				<div className="z-50 w-3/4 md:max-h-96 md:flex md:flex-row bg-gray-900 rounded-lg">
					<img src={Torre} className="rounded-lg md:w-2/5 bg-cover" alt="Torre" />
					<div className="flex flex-col p-4 h-full justify-between">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<p className="mb-2 max-h-52 overflow-y-scroll">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.

							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.

							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.

							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.
						</p>
						<button className="bg-emerald-500 border-emerald-500 border-2 rounded flex items-center justify-center hover:bg-emerald-600 duration-200 hover:border-emerald-600">
							Add to cart
						</button>
					</div>
				</div>
			</div>

			<h1 className="mb-4">Store</h1>

			<div className="w-full grid grid-cols-2 gap-6 md:grid-cols-6">
				<div className="item rounded-lg flex flex-col justify-center bg-slate-800">
					<img src={Torre} className="rounded-lg" alt="Torre" />
					<div className="flex flex-col p-4">
						<p>Product Name</p>
						<p className="mb-2">$100.000</p>
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
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
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
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
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
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
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
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
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
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
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
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
						<button className="mb-2 text-emerald-500 border-emerald-500 border-2 rounded-md flex items-center justify-center hover:bg-emerald-500 hover:text-white duration-200">
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
