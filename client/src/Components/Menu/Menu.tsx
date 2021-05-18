import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

function Menu() {
	return (
		<div id='menu'>
			<Link to='/'>Login</Link>
			<Link to='/home'>Home</Link>
			<Link to='/clients'>Clients</Link>
			<Link to='/projects'>Projects</Link>
			<Link to='/settings'>Settings</Link>
		</div>
	);
}

export default Menu;
