// Import ==============================================
import { model, Schema, Document, Model } from "mongoose";
import { createHmac } from "crypto";
// End Import ==============================================

export interface IUser extends Document {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	defaulRate?: number;
	setPassword(password: string): void;
	hashPassword(password: string): string;
	verifyPassword(password: string): boolean;
}

const UserSchema = new Schema<IUser>(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		defaultRate: {
			type: Number,
			default: 0.0,
		},
	},
	{ timestamps: true }
);

UserSchema.methods = {
	hashPassword(password: string): string {
		const secret: string = "WELELELELE";
		const hashedPassword = createHmac("sha256", secret)
			.update(password)
			.digest("hex");
		return hashedPassword;
	},
	setPassword(password: string) {
		this.password = this.hashPassword(password);
	},
	verifyPassword(password: string): boolean {
		return this.password === this.hashPassword(password);
	},
};

const User: Model<IUser> = model("User", UserSchema);
export default User;
