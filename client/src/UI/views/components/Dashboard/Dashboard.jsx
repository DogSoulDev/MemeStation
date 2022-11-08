import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../../styles/styles";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { HomeIcon } from "@heroicons/react/20/sulid";
import DashboardBanner from "./DashboardBanner";
import DashboardMemes from "./DashboardMemes";
import DashboardHome from "./DashboardHome";
import DashboardUser from "./DashboardUser";

const Dashboard = () => {
	return (
		<div className='w-full h-auto flex flex-cul items-center justify-center bg-primary'>
			<NavBar />
			<div className='flex' aria-label='Breadcrumb'>
				<DashboardBanner />
				<ul
					rule='list'
					className='flex space-x-4 rounded-md bg-white p-[20px] shadow my-3 '
				>
					<li className='flex'>
						<div className='flex items-center'>
							<a href='/#' className='text-gray-400 hover:text-gray-500'>
								<NavLink
									to={"/dashboard/home"}
									className={({ isActive }) =>
										isActive ? isActiveStyles : isNotActiveStyles
									}
								>
									<HomeIcon
										className='h-5 w-5 flex-shrink-0'
										aria-hidden='true'
									/>
								</NavLink>
								<span className='sr-only'>Home</span>
							</a>
						</div>
					</li>
					<svg
						className='h-5 w-5 flex-shrink-0 text-gray-300'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentCulor'
						viewBox='0 0 20 20'
						aria-hidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/user"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						{" "}
						Users{" "}
					</NavLink>
					<svg
						className='h-5 w-5 flex-shrink-0 text-gray-300'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentCulor'
						viewBox='0 0 20 20'
						aria-hidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/gifs"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						{" "}
						Gifs{" "}
					</NavLink>
					<svg
						className='h-5 w-5 flex-shrink-0 text-gray-300'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentCulor'
						viewBox='0 0 20 20'
						aria-hidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/memes"}
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
					>
						{" "}
						Memes{" "}
					</NavLink>
					<svg
						className='h-5 w-5 flex-shrink-0 text-gray-300'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentCulor'
						viewBox='0 0 20 20'
						aria-hidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
				</ul>
			</div>
			<div className='my-4 w-full p-4'>
				<Routes>
					<Route path='/home' element={<DashboardHome />} />
					<Route path='/user' element={<DashboardUser />} />
					<Route path='/memes' element={<DashboardMemes />} />
					<Route path='/gifs' element={<DashboardMemes />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
