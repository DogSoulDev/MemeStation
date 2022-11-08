import axios from "axios";

const baseURL = "http://localhost:4000/";

//!Users
export const validateUser = async (token) => {
	try {
		const res = await axios.get(`${baseURL}api/users/login`, {
			headers: {
				Authorization: "Bearer " + token,
			},
		});
		return res.data;
	} catch (error) {
		return null;
	}
};
export const getAllUsers = async () => {
	try {
		const res = await axios.get(`${baseURL}api/users/getUsers`);
		return res.data;
	} catch (error) {
		return null;
	}
};
export const removeUser = async (userId) => {
	try {
		const res = axios.delete(`${baseURL}api/users/delete/${userId}`);
		return res;
	} catch (error) {
		return null;
	}
};
export const changingUserRole = async (userId, role) => {
	try {
		const res = axios.put(`${baseURL}api/users/updateRole/${userId}`, {
			data: { role: role },
		});
		return res;
	} catch (error) {
		return null;
	}
};


//?Memes
export const getAllMemes = async () => {
	try {
		const res = await axios.get(`${baseURL}api/memes/getAll`);
		return res.data;
	} catch (error) {
		return null;
	}
};
export const saveNewMeme = async (data) => {
	try {
		const res = axios.post(`${baseURL}api/memes/save`, { ...data });
		return (await res).data.meme;
	} catch (error) {
		return null;
	}
};
export const deleteMemeById = async (id) => {
	try {
		const res = axios.delete(`${baseURL}api/memes/delete/${id}`);
		return res;
	} catch (error) {
		return null;
	}
};


//*Gif's
export const getAllGifs = async () => {
	try {
		const res = await axios.get(`${baseURL}api/gifs/getAll`);
		return res.data;
	} catch (error) {
		return null;
	}
};
export const saveNewGif = async (data) => {
	try {
		const res = axios.post(`${baseURL}api/gifs/save`, { ...data });
		return (await res).data.gif;
	} catch (error) {
		return null;
	}
};
export const deleteGifById = async (id) => {
	try {
		const res = axios.delete(`${baseURL}api/gifs/delete/${id}`);
		return res;
	} catch (error) {
		return null;
	}
};
