/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//!All imports from API to use them later.
import { getAllMemes, getAllGifs } from "../../../../api";
import { actionType } from "../../../../hooks/Reducer/Reducer";
import { useStateValue } from "../../../../hooks/Context/StateProvider";
import Filter from "../../components/Filter/Filter";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	const [
		{ searchTerm, allMemes, allGifs, memeFilter, gifFilter, filterTerm },
		dispatch,
	] = useStateValue();
	const [filteredMemes, setFilteredMemes] = useState(null);
	const [filteredGifs, setFilteredGifs] = useState(null);

	//?Memes
	useEffect(() => {
		if (!allMemes) {
			getAllMemes().then((data) => {
				dispatch({
					type: actionType.SET_ALL_MEMES,
					allMemes: data.data,
				});
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (searchTerm.length > 0) {
			const filtered = allMemes.filter(
				(data) =>
					data.meme.toLowerCase().includes(searchTerm) ||
					data.name.toLowerCase().includes(searchTerm) ||
					data.meme.includes(memeFilter),
			);
			setFilteredMemes(filtered);
		} else {
			setFilteredMemes(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);
	useEffect(() => {
		const filtered = allMemes?.filter((data) => data.meme === memeFilter);
		if (filtered) {
			setFilteredMemes(filtered);
		} else {
			setFilteredMemes(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [memeFilter]);
	useEffect(() => {
		const filtered = allMemes?.filter(
			(data) => data.category.toLowerCase() === filterTerm,
		);
		if (filtered) {
			setFilteredMemes(filtered);
		} else {
			setFilteredMemes(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterTerm]);

	//?Gifs
	useEffect(() => {
		if (!allGifs) {
			getAllGifs().then((data) => {
				dispatch({
					type: actionType.SET_ALL_GIFS,
					allGifs: data.data,
				});
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (searchTerm.length > 0) {
			const filtered = allGifs.filter(
				(data) =>
					data.gif.toLowerCase().includes(searchTerm) ||
					data.gif.toLowerCase().includes(searchTerm) ||
					data.gif.includes(gifFilter),
			);
			setFilteredGifs(filtered);
		} else {
			setFilteredGifs(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	useEffect(() => {
		const filtered = allGifs?.filter((data) => data.gif === gifFilter);
		if (filtered) {
			setFilteredGifs(filtered);
		} else {
			setFilteredGifs(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gifFilter]);

	useEffect(() => {
		const filtered = allGifs?.filter(
			(data) => data.category.toLowerCase() === filterTerm,
		);
		if (filtered) {
			setFilteredGifs(filtered);
		} else {
			setFilteredGifs(null);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterTerm]);

	return (
		<div className='w-full h-auto flex flex-col items-center justify-center bg-primary'>
			<NavBar />
			<SearchBar />
			{searchTerm.length > 0 && (
				<p className='my-4 text-base text-textColor'>
					Searched for :
					<span className='text-xl text-cartBg font-semibold'>
						{searchTerm}
					</span>
				</p>
			)}
			<Filter setFilteredMemes={setFilteredMemes} />
			<div className='w-full h-auto flex flex-col items-center justify-center bg-[#f3f3f3]'>
				<div className='w-full relative bg-gradient-to-r from-[#190702] to-[#f7e5a7]'>
					<img
						src='https://i.pinimg.com/564x/89/5f/68/895f681c01b33b869bba09ae337969a4.jpg'
						className='absolute inset-0 object-cover w-full h-full mix-blend-multiply opacity-25'
						alt=''
					/>
					<div className='relative  bg-deep-purple-accent-700 border-b-[10px] border-[white]'>
						<svg
							className='absolute inset-x-0 bottom-0 text-[#1c0c2c52] shadow-lg'
							viewBox='0 0 1160 160'
						>
							<path
								fill='currentColor'
								d='M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z'
							/>
						</svg>
						<div className='relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
							<div className='flex flex-col items-center justify-between xl:flex-row'>
								<div className='w-full max-w-l mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
									<div className='flex items-center  -mx-1'>
										<p className='mx-1 text-sm text-[#e6e6e6] dark:text-white'>
											Coming Soon...
										</p>
										<svg
											className='w-6 h-6 mx-1 fill-[#e6e6e6] dark:fill-white'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 384 512'
										>
											<path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
										</svg>
									</div>
									<h1 className='mt-2 mb-8 bg-gradient-to-r from-[#f6ece9] via-[#9a6203] to-orange-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-6xl '>
										The Meme & Gif Life!
										<span className='sm:block'> Meme Lovers </span>
									</h1>
									<div className='flex items-center mb-8   '>
										<img
											className='object-cover w-12 h-12 rounded-full ring ring-[#ff5722]'
											src='https://i.pinimg.com/564x/4d/77/da/4d77da67a7165ac9209edeaaf06331b6.jpg'
											alt=''
										/>
										<img
											className='object-cover w-12 h-12 -mx-4 rounded-full ring ring-[#ff5722]'
											src='https://i.pinimg.com/564x/71/8b/f5/718bf5ffc2c4a181e5db058fa1a437f8.jpg'
											alt=''
										/>
										<img
											className='object-cover w-12 h-12 rounded-full ring ring-[#ff5722]'
											src='https://i.pinimg.com/564x/0a/b4/7d/0ab47d01208c387d6bb8f9660b8b69f5.jpg'
											alt=''
										/>
									</div>
									<p className='max-w-xl mb-4 text-base text-gray-200 md:text-lg'>
										Fun is the first part of life!
									</p>
									<div>
										<Link to='/meme'>
											<button className='px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f47fee] rounded-md hover:bg-[#f85af5] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
												Find you Funny time!
											</button>
										</Link>
									</div>
								</div>
								<div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
									<div className='bg-white rounded shadow-2xl p-7 sm:p-10'>
										<h2 className='mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
											Think about CODE MEMES!
											<br className='hidden md:block' />
											for{" "}
										</h2>
										<div className='w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
											<img
												className='object-cover object-top w-full h-56'
												src='https://i.pinimg.com/564x/db/60/48/db60480c938882c42c270417131886da.jpg'
												alt='avatar'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SearchBar />
				{searchTerm.length > 0 && (
					<p className='my-4 text-base text-textColor'>
						Searched for :
						<span className='text-xl text-cartBg font-semibold'>
							{searchTerm}
						</span>
					</p>
				)}
				<Filter setFilteredMemes={setFilteredMemes} />
				<Footer />
			</div>
		</div>
	);
};
export default Home;
