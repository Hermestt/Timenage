import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
	let history = useHistory();

	const [loginCredentials, setLoginCredentials] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:5000/auth/login",
				loginCredentials
			);
			if (response.data.success) {
				alert("Logged in");
				history.push("/home");
			}
		} catch (error) {
			alert("Login failed, bad credentials");
			console.log(error);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let { name, value } = e.currentTarget;
		setLoginCredentials({ ...loginCredentials, [name]: value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor=''>Email</label>
			<input type='text' name='email' onChange={handleChange} />
			<label htmlFor=''>Password</label>
			<input
				type='password'
				name='password'
				onChange={(e) => {
					setLoginCredentials({
						...loginCredentials,
						password: e.target.value,
					});
				}}
			/>
			<button type='submit'>Login</button>
		</form>
	);
}
