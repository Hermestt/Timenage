// Import ==============================================
import express from "express";
import cors from "cors";

// Mongoose dBConnection
import { dbConnection } from "./database/dbConnection";

// Import controller
import { userRouter } from "./routes/userRouter";
import { authRouter } from "./routes/authRouter";

// End Import ==============================================

// Setup Express
const app = express();
app.use(cors());
app.use(express.json());

// Set Express Routers
app.use("/user", userRouter);
app.use("/auth", authRouter);

// Database Connection
dbConnection.on("Error", console.error.bind(console, "connection error:"));
dbConnection.once("open", function () {
	console.log("Connection was made successfully! Ready to interact!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is runnin in http://localhost:${PORT}`);
});
