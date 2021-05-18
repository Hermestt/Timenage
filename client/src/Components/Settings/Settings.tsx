import React, { FC } from "react";
import { Link } from "react-router-dom";

const Settings: FC = () => {
	return (
		<div>
			<h1>Settings</h1>
			<div className='user-view-details'>
				<div className='avatar-cont'>
					<div className='avatar'></div>
				</div>
				<div className='details-cont'>
					<span className='name'>Pedro Oliveira</span>
					<span className='value'>- 40€/Hour</span>
					<span className='title'>Developer</span>
				</div>
				<Link to='/editsettings'>Edit</Link>
			</div>
			<div className='rates-cont'>
				<h4>Projects rates</h4>
				<ul>
					<li>
						<span>Project one</span>
						<span>24€</span>
					</li>
					<li>
						<span>Project two</span>
						<span>32€</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Settings;
