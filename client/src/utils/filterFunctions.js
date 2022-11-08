import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";


export const filters = [
	{ id: 1, name: "Memes", value: "memes" },
	{ id: 2, name: "Gifs", value: "gifs" },
];

export const deleteAnObject = (referenceUrl) => {
	const deleteRef = ref(storage, referenceUrl);
	deleteObject(deleteRef)
		.then(() => {
			return true;
		})
		.catch((error) => {
			return false;
		});
};
