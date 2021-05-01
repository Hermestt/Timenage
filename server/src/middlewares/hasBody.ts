import { NextFunction, Request, Response } from "express";

export default function hasBody(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (isEmpty(req.body)) {
		return res.status(400).json({
			success: false,
			error: "You must provide data",
		});
	}

	next();
}

// Check if the request body is empty
function isEmpty(reqBody: object): boolean {
	return Object.keys(reqBody).length === 0 ? true : false;
}
