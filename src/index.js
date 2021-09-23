import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import LinkingNodes from "./LinkingNodes";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route
				exact={true}
				path="/"
				component={Home} />
			<Route
				path="/linking-nodes"
				component={LinkingNodes} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
