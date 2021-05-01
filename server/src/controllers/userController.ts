import { Request, Response } from "express";
import User from "../models/UserModel";

async function handleUserRegistration(req: Request, res: Response) {
	const email: string = req.body.email;
	const user: object | null = await User.findOne({ email });

	if (user != null) {
		const message: string = "User already exists";
		return res.status(409).json({ message });
	}

	const newUser = new User(req.body);
	newUser.setPassword(req.body.password);

	try {
		await newUser.save();
	} catch (error) {
		console.log(error);
	}

	res.status(200).send({
		success: true,
		newUser,
	});
}

export default handleUserRegistration;
