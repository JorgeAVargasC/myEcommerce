import React from "react";

export default function Errors({ errors }) {

	console.log(errors)

	return (
		<>
			{errors.isErrors && (
				<div>
					<ul>
						{errors.errors.map((error, index) => (
							<li
								className="absolute z-40 top-1/2 right-1/2 bg-red-300 text-red-900 p-10"
								key={index}
							>
								{error}
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}
