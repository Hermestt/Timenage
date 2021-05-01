import React from "react";
import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<ProtectedRoute exact path='/dashboard' component={Dashboard} />
					<Route exact path='/' component={Login} />
					<Redirect from='*' to='/' />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
