import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.config";
import { getAllMemes, getAllGifs, validateUser } from "./api";
import Login from "./UI/views/components/Login/Login";

import { useStateValue } from "./hooks/Context/StateProvider";
import { actionType } from "./hooks/Reducer/Reducer";
import "./App.css";

function App() {
	const firebaseAuth = getAuth(app);
	const navigate = useNavigate();
	const [{ user, allGifs, allMemes }, dispatch] = useStateValue();
	const [isLoading, setIsLoading] = useState(false);
	const [auth, setAuth] = useState(
		false || window.localStorage.getItem("auth") === "true",
	);
	useEffect(() => {
		setIsLoading(true);
		firebaseAuth.onAuthStateChanged((userInfo) => {
			if (userInfo) {
				userInfo.getIdToken().then((token) => {
					//! To see the token, console.log(token);
					window.localStorage.setItem("auth", "true");
					validateUser(token).then((data) => {
						dispatch({
							type: actionType.SET_USER,
							user: data,
						});
					});
				});
				setIsLoading(false);
			} else {
				setAuth(false);
				dispatch({
					type: actionType.SET_USER,
					user: null,
				});
				setIsLoading(false);
				window.localStorage.setItem("auth", "false");
				navigate("/intro");
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!allMemes && user) {
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
		if (!allGifs && user) {
			getAllGifs().then((data) => {
				dispatch({
					type: actionType.SET_ALL_GIFS,
					allGifs: data.data,
				});
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='h-auto flex items-center justify-center min-w-[680px]'>
			{isLoading ||
				(!user && (
					<div className='fixed inset-0 bg-loaderOverlay backdrop-blur-sm '></div>
				))}
				<Login/>
		</div>
	);
}

export default App;
