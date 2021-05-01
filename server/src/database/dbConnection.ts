require("dotenv").config();
import mongoose from 'mongoose';
const url:string = process.env.ATLAS_URI;

// Make mongoose connection to DB
mongoose
.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.catch(e => console.log("Connection error", e.message));

export const dbConnection = mongoose.connection;