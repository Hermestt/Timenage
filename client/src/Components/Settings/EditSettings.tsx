import React, { FC, useEffect } from "react";
import axios from "axios";

const EditSettings: FC = () => {
	useEffect(() => {
		async function fetchUser() {}
		fetchUser();
	}, []);

	return (
		<div>
			<div>
				<h1>Edit User Settings</h1>
				<div className='user-view-details'>
					<div className='avatar-cont'>
						<label htmlFor='myfile'>Upload avatar:</label>
						<input type='file' id='myfile' name='myfile' multiple />
					</div>
					<form className='details-cont'>
						<label htmlFor='fname'>First name:</label>
						<input type='text' id='fname' name='fname' />
						<br></br>
						<label htmlFor='lname'>Last name:</label>
						<input type='text' id='lname' name='lname' />
						<br></br>
						<label htmlFor='rate'>Default rate:</label>
						<input type='number' id='rate' name='rate' />
						<br></br>
						<label htmlFor='title'>Title</label>
						<input type='title' id='title' name='title' />
						<br></br>
					</form>
				</div>
				<div className='rates-cont'>
					<h4>Projects rates</h4>
					<form className='rates-form'>
						<label htmlFor='lname'>Project one:</label>
						<input type='text' id='lname' name='lname' />
						<br></br>
						<label htmlFor='lname'>Project two:</label>
						<input type='text' id='lname' name='lname' />
					</form>
				</div>

				<div className='actions'>
					<button>Save</button>
				</div>
			</div>
		</div>
	);
};

export default EditSettings;
