import React, { createContext, useContext, useEffect, useState } from "react";
import dashboard from "../assets/svg/dashboard.svg";
import upSign from "../assets/svg/upSignWhite.svg";
import downSign from "../assets/svg/downSign.svg";
import support from "../assets/svg/support.svg";
import communication from "../assets/svg/communication.svg";
import program from "../assets/svg/program.svg";
import { projectMenus } from "../sidebar.config";

const SidebarContext = createContext();

const Sidebar = ({ expanded }) => {
	const [menus, setMenus] = useState([]);

	useEffect(() => {
		setMenus(projectMenus);
	}, []);

	const handelSelect = (label) => {
		setMenus((menus) =>
			menus.map((x) =>
				x.label === label ? { ...x, selected: true } : { ...x, selected: false }
			)
		);
	};

	return (
		<nav className='px-2 text-sm w-[260px] pb-3 flex flex-col bg-gradient-to-r from-red-50 to-fuchsia-100 border-r shadow-sm'>
			<SidebarContext.Provider value={{ expanded }}>
				<div className='mt-6'>
					<p className='bg-gradient-to-r from-violet-600 to-indigo-600 from-primary to-danger text-transparent bg-clip-text'>
						Analytics
					</p>
					<div className='flex space-x-2 py-3 ps-2'>
						<img src={dashboard} alt='' />
						<p> Dashboard </p>
					</div>
				</div>
				<div className=''>
					<p className='bg-gradient-to-r from-violet-600 to-indigo-600 from-primary to-danger text-transparent bg-clip-text'>
						All Projects
					</p>
					<div className='flex py-3 '>
						<ul className='flex-1 '>
							{menus?.map((project) => (
								<SidebarItem
									key={project.label}
									icon={project.icon}
									options={project.children}
									text={project.label}
									alert
									active={project.selected}
									onClick={() => handelSelect(project.label)}
								/>
							))}
						</ul>
					</div>
				</div>
				<div className='mt-3'>
					<img src={support} alt='support' className=' w-16' />
					<div className='flex space-x-2 py-3 ps-2'>
						<img src={communication} alt='' />
						<p> Communication </p>
					</div>
					<div className='flex space-x-2 py-3 ps-2'>
						<img src={program} alt='' />
						<p> Program </p>
					</div>
				</div>
			</SidebarContext.Provider>
		</nav>
	);
};

export default Sidebar;

export function SidebarItem({ icon, text, active, options, onClick }) {
	const { expanded } = useContext(SidebarContext);

	const [subMenus, setSubMenus] = useState(
		options.map((x) => ({ ...x, selected: false }))
	);

	const handelSelect = (label) => {
		setSubMenus((menus) =>
			menus.map((x) =>
				x.label === label ? { ...x, selected: true } : { ...x, selected: false }
			)
		);
	};

	return (
		<>
			<li
				className={`relative flex items-center py-2 px-1 my-2 text-sm rounded-md cursor-pointer transition-colors group ${
					active
						? "bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white"
						: "hover:bg-indigo-50 text-gray-600"
				}`}
				onClick={onClick}
			>
				<img src={icon} alt='icon' />
				<span
					className={`overflow-hidden transition-all  ${
						expanded ? "w-full ml-3" : "w-0"
					}`}
				>
					{text}
				</span>
				{active ? <img src={upSign} alt='u' /> : <img src={downSign} alt='d' />}
				{!expanded && (
					<div
						className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
					>
						{text}
					</div>
				)}
			</li>

			{active ? (
				<div className=' mt-2 transition-opacity duration-500 ease-in-out'>
					<ul>
						{subMenus?.map((option) => (
							<li
								className={`text-xs ${
									option.selected
										? "rounded-lg bg-gradient-to-r from-fuchsia-800 to-pink-500 text-white"
										: "hover:bg-indigo-50 text-gray-600"
								} py-3 px-4 hover:bg-gray-100`}
								onClick={() => handelSelect(option.label)}
							>
								{option.label}
							</li>
						))}
					</ul>
				</div>
			) : null}
		</>
	);
}
