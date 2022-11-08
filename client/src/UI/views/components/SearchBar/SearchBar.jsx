import React from "react";
import { IoSearch } from "react-icons/io5";
import { actionType } from "../../../../hooks/Reducer/Reducer";
import { useStateValue } from "../../../../hooks/Context/StateProvider";

const SearchBar = () => {
	const [{ searchTerm }, dispatch] = useStateValue();
	const setSearchTerm = (value) => {
		dispatch({
			type: actionType.SET_SEARCH_TERM,
			searchTerm: value,
		});
	};
	return (
		<div className='w-full h-22 bg-[#dfc7df] flex items-center justify-center rounded-b-[100px]'>
			<div className='w-full gap-3 p-4 md:w-2/3 bg-white shadow-xl mt-12  mb-12 rounded-full flex items-center'>
				<IoSearch className='text-2xl text-textColor' />
				<input
					type='text'
					value={searchTerm}
					className='w-full h-full bg-transparent text-lg text-textColor  border-none outline-none '
					placeholder='Search here ....'
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
