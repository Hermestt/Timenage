import React from "react";
import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/dashboard' component={Dashboard} />
					<Redirect from='*' to='/' />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
