import React from "react";
import img from "../assets/svg/img.svg";
import edit from "../assets/svg/edit.svg";
import remove from "../assets/svg/remove.svg";
import plus from "../assets/svg/plus.svg";

function Table({ data }) {
	const tableHeading = [
		"Full Name",
		"CLient Score",
		"Description",
		"Assignment",
		"Preview",
		"Action",
		"",
	];
	return (
		<table className='px-6 min-w-full border-b border-gray-100'>
			<thead>
				<tr className=' bg-slate-50'>
					{tableHeading.map((x, i) => (
						<th className='font-light text-xs px-4 py-2 text-left' key={x + 1}>
							{x}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{[1, 2, 3, 4, 5, 6].map((x) => (
					<tr key={x} className='border-b border-gray-100'>
						<td className='text-xs px-4 py-2 text-fuchsia-700'>Data 1</td>
						<td className='font-thin text-xs px-4 py-2'>20-25%</td>
						<td className='font-thin text-xs px-4 py-2 max-w-20'>
							<div class='overflow-hidden'>
								<p class='truncate'>
									Single-line text that will be truncated with ellipsis if it
									overflows the container
								</p>
							</div>
						</td>
						<td className='font-thin text-xs px-4 py-2'>Student</td>
						<td className='font-thin text-xs px-4 py-2'>
							<img src={img} alt='img' />
						</td>
						<td className='font-thin text-xs px-4 py-2 flex'>
							<button className=' space-x-2 flex items-center  rounded-lg border-gray-200 bg-white p-1 '>
								<img src={edit} alt='' />
							</button>
							<button className=' space-x-2 flex items-center  rounded-lg border-gray-200 bg-white p-1 '>
								<img src={remove} alt='' />
							</button>
						</td>
						<td className='font-thin text-xs px-4 py-1'>
							<button className='space-x-2 flex items-center border rounded-lg border-gray-200 bg-white px-4 py-1 '>
								<img src={plus} alt='' />
								<p className='font-jakarta text-xs text-gray-800 from-primary to-danger bg-clip-text'>
									Add Question
								</p>
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
