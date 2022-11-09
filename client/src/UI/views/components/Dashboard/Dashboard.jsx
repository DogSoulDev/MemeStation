import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../../styles/styles";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import DashboardBanner from "./DashboardBanner";
import DashboardHome from "./DashboardHome";
import DashboardUser from "./DashboardUser";
import DashboardNewMeme from "./DashboardNewMeme";
import DashboardNewGif from "./DashboardNewGif";

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
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='w-6 h-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
										/>
									</svg>
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
						ariahidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/gif"}
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
						ariahidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
					<NavLink
						to={"/dashboard/meme"}
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
						ariahidden='true'
					>
						<path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
					</svg>
				</ul>
			</div>
			<div className='my-4 w-full p-4'>
				<Routes>
					<Route path='/home' element={<DashboardHome />} />
					<Route path='/user' element={<DashboardUser />} />
					<Route path='/meme' element={<DashboardNewMeme />} />
					<Route path='/gif' element={<DashboardNewGif />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
