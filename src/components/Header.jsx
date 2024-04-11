import React from "react";
import logo from "../assets/svg/logo.svg";
import menuBar from "../assets/svg/menuBars.svg";
import downSign from "../assets/svg/downSign.svg";
import world from "../assets/svg/world.svg";

const Header = ({ setExpanded }) => {
	return (
		<div className='ps-3.5 w-full h-14 flex justify-between bg-slate-100 items-center'>
			<div className='flex space-x-4'>
				<div onClick={() => setExpanded((prev) => !prev)}>
					<img src={menuBar} alt='Logo' className='' />
				</div>
				<div className=''>
					<img src={logo} alt='Logo' className='' />
				</div>
			</div>
			<div className='flex space-x-6'>
				<div className='flex space-x-2'>
					<img src={world} alt='' />
					<select className=' bg-slate-100' id=''>
						<option value=''>English</option>
						<option value=''>Hindi</option>
						<option value=''>Spanish</option>
						<option value=''>English</option>
					</select>
				</div>
				<div className='flex space-x-2'>
					<div className='w-10 h-10 rounded-full overflow-hidden'>
						<img
							src='https://wallpapers.com/images/featured/devil-boy-qhxt88ddbuwgm3f8.jpg'
							alt='Avatar'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='flex items-center'>
						<img src={downSign} alt='' />
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Header;
