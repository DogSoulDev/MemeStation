import React from "react";
import ReactDOM from "react-dom/client";
import { StateProvider } from "./hooks/Context/StateProvider";
import { initialState } from "./hooks/InitialState/InitialState";
import reducer from "./hooks/Reducer/Reducer";
import "./index.css";
import Router from "./routes/Router.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
			<StateProvider initialState={initialState} reducer={reducer}>
				<Router />
			</StateProvider>
	</React.StrictMode>,
);
