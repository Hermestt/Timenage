import { Request, Response } from "express";
import User, { IUser } from "../models/UserModel";

async function handleAuth(req: Request, res: Response) {
	const { email, password } = req.body;
	const user: IUser = await User.findOne({ email });

	if (!user || !user.verifyPassword(password)) {
		return res.status(401).send({
			success: false,
			message: `The Password or the Email aren't valid`,
		});
	}

	res.status(200).send({
		success: true,
		message: `Welcome ${user.firstName} ${user.lastName}`,
		userID: user.id, // improve the interface to have fullName prop?!
	});
}

export default handleAuth;
