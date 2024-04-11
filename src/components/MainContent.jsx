import React, { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import module from "../assets/svg/module.svg";
import search from "../assets/svg/search.svg";
import filter from "../assets/svg/filter.svg";

const MainContent = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

	return (
		<div className='main-content bg-transparent w-full h-[100vh] pr-6 ps-3'>
			<div className='mt-6 text-white '>
				<div className='flex justify-between'>
					<p className='text-2xl'>Assignment</p>
					<button className='flex items-center border border-gray-400 bg-white px-4 py-2 rounded'>
						<p className='text-sm bg-gradient-to-r from-fuchsia-600 to-pink-500 from-primary to-danger text-transparent bg-clip-text'>
							<span className="mr-1" >+</span> Add Modules
						</p>
					</button>
				</div>

				<div className='flex space-x-3 text-sm mt-6'>
					<div>
						<img src={module} alt='md' />
					</div>
					<p>Product Section</p> <div>|</div>
					<div className='border rounded-full p-1 px-3 bg-white'>
						<p className='bg-gradient-to-r from-fuchsia-600 to-pink-500 from-primary to-danger text-transparent bg-clip-text'>
							Academic Pathway Planing
						</p>
					</div>
					<div className='border rounded-full p-1 px-3 bg-transparent'>
						<p className='from-primary to-danger text-transparent bg-clip-text text-white'>
							JIVA
						</p>
					</div>
					<div className='border rounded-full p-1 px-3 bg-transparent'>
						<p className='from-primary to-danger text-transparent bg-clip-text text-white'>
							EXAM
						</p>
					</div>
				</div>
			</div>

			<div className='border bg-white w-full rounded-lg mt-4 pt-5'>
				<div className='flex justify-between px-6 mb-4'>
					<div className='flex items-center space-x-2'>
						<p className='text-lg'> Assignment Details </p>
						<>
							<div className=''>
								<p className='text-xs rounded-full bg-light-violet text-violet-900 p-1 px-2'>
									100 Details
								</p>
							</div>
						</>
					</div>
					<div className='flex space-x-6 h-10'>
						<button className=' space-x-2 flex items-center border rounded-lg border-gray-200 bg-white px-4 py-2 '>
							<img src={search} alt='' />
							<p className='text-sm text-gray-600 from-primary to-danger bg-clip-text'>
								Search...
							</p>
						</button>
						<button className=' space-x-2 flex items-center border rounded-lg border-gray-200 bg-white px-4 py-2 '>
							<img src={filter} alt='' />
							<p className=' text-sm text-stone-950 from-primary to-danger bg-clip-text'>
								Filter
							</p>
						</button>
					</div>
				</div>
				<div className='w-full'>
          <Table/>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
				</div>
			</div>
		</div>
	);
};

export default MainContent;
