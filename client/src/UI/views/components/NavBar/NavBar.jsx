import { NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { isActiveStyles, isNotActiveStyles } from "../../styles/styles";
import { app } from "../../../../config/firebase.config";
import { HomeIcon } from "@heroicons/react/20/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";
import { CreditCardIcon } from "@heroicons/react/20/solid";

import Profile from "./Profile/Profile";
import { Logo } from "../../../assets/img";

const NavBar = () => {
	return (
		<header className='w-full bg-primaryHeader border-b-4 border-primaryOrange'>
			<nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
				<div className='flex w-full items-center justify-between border-b border-primaryOrange py-6 lg:border-none'>
					<div className='flex items-center'>
						<a href='/home'>
							<span className='sr-only'>Your Company</span>
							<img
								className='h-20 w-auto'
								src='https://i.pinimg.com/originals/84/48/44/84484422a8c90d6810cfffdb68a73267.png'
								alt=''
							/>
						</a>
						<div className='ml-10 hidden space-x-8 lg:block'>
							<ul className='flex items-center justify-center ml-7'>
								<li className='mx-5 text-lg'>
									<NavLink
										to={"/home"}
										className={({ isActive }) =>
											isActive ? isActiveStyles : isNotActiveStyles
										}
									>
										Home
									</NavLink>
								</li>
								<li className='mx-5 text-lg'>
									<NavLink
										to={"/meme"}
										className={({ isActive }) =>
											isActive ? isActiveStyles : isNotActiveStyles
										}
									>
										Memes
									</NavLink>
								</li>
								<li className='mx-5 text-lg'>
									<NavLink
										to={"/gif"}
										className={({ isActive }) =>
											isActive ? isActiveStyles : isNotActiveStyles
										}
									>
										Gifs
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<Profile />
				</div>
				<div className='flex flex-wrap justify-center space-x-6 py-4 lg:hidden'>
					<ul className='flex items-center justify-center ml-7'>
						<li className='mx-5 text-lg'>
							<NavLink
								to={"/home"}
								className={({ isActive }) =>
									isActive ? isActiveStyles : isNotActiveStyles
								}
							>
								<HomeIcon
									className='-ml-1 mr-2 h-5 w-5 text-gray-400 hover:text-[#f3709c]'
									aria-hidden='true'
								/>
							</NavLink>
						</li>
						<li className='mx-5 text-lg'>
							<NavLink
								to={"/meme"}
								className={({ isActive }) =>
									isActive ? isActiveStyles : isNotActiveStyles
								}
							>
								<ArrowTrendingUpIcon
									className='-ml-1 mr-2 h-5 w-5 text-gray-400 hover:text-[#cc9c3d]'
									aria-hidden='true'
								/>
							</NavLink>
						</li>
						<li className='mx-5 text-lg'>
							<NavLink
								to={"/gif"}
								className={({ isActive }) =>
									isActive ? isActiveStyles : isNotActiveStyles
								}
							>
								<CreditCardIcon
									className='-ml-1 mr-2 h-5 w-5 text-gray-400 hover:text-[#d0ae3e]'
									aria-hidden='true'
								/>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
