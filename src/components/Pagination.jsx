import React from "react"
import previous from '../assets/svg/previous.svg'
import next from '../assets/svg/next.svg'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const renderPageNumbers = () => {
		const pageNumbers = [];

		for (let i = 1; i <= Math.min(totalPages, 3); i++) {
			pageNumbers.push(
				<button
					key={i}
					className={`px-4 py-2 text-xs h-11 w-11 ${
						currentPage === i
							? "rounded-full bg-purple-700 text-white"
							: " text-neutral-700"
					}`}
					onClick={() => onPageChange(i)}
				>
					{i}
				</button>
			);
		}

		if (totalPages > 3) {
			if (currentPage > 3 && currentPage < totalPages - 2)
				pageNumbers.push(
					<button
						className={`px-4 py-2 text-xs h-11 w-11 ${"rounded-full bg-purple-700 text-white"}`}
					>
						{currentPage}
					</button>
				);
			else pageNumbers.push(<span key='left-ellipsis'>...</span>);
		}

		for (let i = Math.max(totalPages - 2, 4); i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					className={`px-4 py-2 text-xs h-11 w-11  ${
						currentPage === i
							? "rounded-full bg-purple-700 text-white"
							:  "text-neutral-700"
					}`}
					onClick={() => onPageChange(i)}
				>
					{i}
				</button>
			);
		}

		return pageNumbers;
	};

	return (
		<div className='flex justify-between my-4'>
			<button
				className='text-sm px-4 py-2 flex space-x-2 text-gray-600'
				onClick={() => onPageChange(currentPage - 1)}
				disabled={!(currentPage > 1)}
			>
			<img src={previous} alt="" /> <p>Previous</p>
			</button>

			<div>{renderPageNumbers()}</div>

			<button
				className='text-sm px-4 py-2 flex space-x-2 text-gray-600'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={!(currentPage < totalPages)}
			>
			<p>Next</p> <img src={next} alt="" />
			</button>
		</div>
	);
};

export default Pagination;
