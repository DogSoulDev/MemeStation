//?An alternative to useState.Reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.
//?useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
//? https://reactjs.org/docs/hooks-reference.html#usereducer

export const actionType = {
	SET_USER: "SET_USER",
	SET_ALL_USERS: "SET_ALL_USERS",
	SET_SEARCH_TERM: "SET_SEARCH_TERM",
	SET_FILTER_TERM: "SET_FILTER_TERM",
	SET_ALL_MEMES: "SET_ALL_MEMES",
	SET_MEMES: "SET_MEMES",
	SET_MEME_FILTER: "SET_MEME_FILTER",
	SET_ALL_GIFS: "SET_ALL_SONGS",
	SET_GIFS: "SET_GIFS",
	SET_GIF_FILTER: "SET_ALBUM_FILTER",
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case actionType.SET_USER:
			return {
				...state,
				user: action.user,
			};
		case actionType.SET_ALL_USERS:
			return {
				...state,
				allUsers: action.allUsers,
			};
		case actionType.SET_SEARCH_TERM:
			return {
				...state,
				searchTerm: action.searchTerm,
			};
		case actionType.SET_FILTER_TERM:
			return {
				...state,
				filterTerm: action.filterTerm,
			};
		case actionType.SET_ALL_MEMES:
			return {
				...state,
				allMemes: action.allMemes,
			};
		case actionType.SET_MEMES:
			return {
				...state,
				memes: action.memes,
			};
		case actionType.SET_MEME_FILTER:
			return {
				...state,
				memeFilter: action.memeFilter,
			};
		case actionType.SET_ALL_GIFS:
			return {
				...state,
				allGifs: action.allGifs,
			};
		case actionType.SET_GIFS:
			return {
				...state,
				gifs: action.gifs,
			};
		case actionType.SET_GIF_FILTER:
			return {
				...state,
				gifFilter: action.gifFilter,
			};
		default:
			return state;
	}
};

export default reducer;
