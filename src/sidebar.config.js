import user from './assets/svg/user.svg'
import client from './assets/svg/client.svg'
import module from './assets/svg/module.svg'


export const projectMenus = [
	{
		label: "Users",
		icon: user,
		children: [
			{
				label: "All Users",
				link: "/",
			},
		],
		selected:false
	},
	{
		label: "Clients",
		icon: client,
		children: [
			{
				label: "All Client",
				link: "/",
			},
		],
		selected:false
	},
	{
		label: "Modules",
		icon: module,
		children: [
			{
				label: "All Modules",
				link: "/",
			},
			{
				label: "Questions",
				link: "/",
			},
			{
				label: "Preview",
				link: "/",
			},
			{
				label: "Study Stack",
				link: "/",
			},
		],
		selected:false
	},
];