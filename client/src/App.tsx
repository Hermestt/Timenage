import React from "react";
import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch,
} from "react-router-dom";
import "./App.css";
import Clients from "./Components/Clients/Clients";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Menu from "./Components/Menu/Menu";
import Projects from "./Components/Projects/Projects";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import Settings from "./Components/Settings/Settings";
import EditSettings from "./Components/Settings/EditSettings";
import Tasks from "./Components/Tasks/Tasks";

function App() {
	return (
		<div id='wrapper'>
			<Router>
				<div id='menu-container'>
					<Menu />
				</div>
				<div id='app-container'>
					<div className='App'>
						<Switch>
							<ProtectedRoute exact path='/home' component={Tasks} />
							<ProtectedRoute exact path='/dashboard' component={Dashboard} />
							<ProtectedRoute exact path='/settings' component={Settings} />
							<ProtectedRoute
								exact
								path='/editsettings'
								component={EditSettings}
							/>
							<ProtectedRoute exact path='/projects' component={Projects} />
							<ProtectedRoute exact path='/clients' component={Clients} />
							<Route exact path='/' component={Login} />
							<Redirect from='*' to='/' />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
