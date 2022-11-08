import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../UI/views/pages/Home/Home";
import Dashboard from "../UI/views/pages/Dashboard/Dashboard";
import Login from "../UI/views/components/Login/Login";
import Profile from "../UI/views/components/NavBar/Profile/Profile";
import UserProfile from "../UI/views/components/NavBar/Profile/UserProfile/UserProfile";
// import Intro from "../UI/views/pages/Intro/Intro";

function Router(auth, setAuth) {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />
					{/* <Route path='/intro' element={<Intro />} /> */}
					<Route path='/login' element={<Login setAuth={setAuth} />} />
					<Route path='/*' element={<Dashboard />} />
					<Route path='/home' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/userprofile' element={<UserProfile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default Router;
