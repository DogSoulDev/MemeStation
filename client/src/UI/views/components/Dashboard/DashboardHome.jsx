import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";

import { getAllMemes, getAllGifs, getAllUsers } from "../../../../api";
import { actionType } from "../../../../hooks/Reducer/Reducer";
import { useStateValue } from "../../../../hooks/Context/StateProvider";
import { bgColors } from "../../styles/styles";

export const DashboardCard = ({ icon, name, count }) => {
	const bg_color = bgColors[parseInt(Math.random() * bgColors.length)];
	return (
		<div
			style={{ background: `${bg_color}` }}
			className={`p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col items-center justify-center`}
		>
			{icon}
			<p className='text-xl text-textColor font-semibold'>{name}</p>
			<p className='text-sm text-textColor'>{count}</p>
		</div>
	);
};

const DashboardHome = () => {
	const [{ allUsers, allMemes, memes, allGifs }, dispatch] = useStateValue();
	useEffect(() => {
		if (!allUsers) {
			getAllUsers().then((data) => {
				dispatch({
					type: actionType.SET_ALL_USERS,
					allUsers: data.data,
				});
			});
		}
		if (!memes) {
			getAllGifs().then((data) => {
				dispatch({ type: actionType.SET_MEMES, memes: data.data });
			});
		}
		if (!allGifs) {
			getAllMemes().then((data) => {
				dispatch({ type: actionType.SET_ALL_GIFS, allGifs: data.data });
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='w-full p-6 flex items-center justify-evenly flex-wrap'>
			<DashboardCard
				icon={<FaUsers className='text-3xl text-textColor' />}
				name={"Users"}
				count={allUsers?.length > 0 ? allUsers?.length : 0}
			/>
			<DashboardCard
				icon={<GiLoveSong className='text-3xl text-textColor' />}
				name={"Songs"}
				count={allMemes?.length > 0 ? allMemes?.length : 0}
			/>
			<DashboardCard
				icon={<RiUserStarFill className='text-3xl text-textColor' />}
				name={"Artist"}
				count={memes?.length > 0 ? memes?.length : 0}
			/>
			<DashboardCard
				icon={<GiMusicalNotes className='text-3xl text-textColor' />}
				name={"Album"}
				count={allGifs?.length > 0 ? allGifs?.length : 0}
			/>
		</div>
	);
};

export default DashboardHome;
