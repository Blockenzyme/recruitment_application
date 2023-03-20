/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import mongoose from "mongoose";
import UserAuthRoutes from "./routes/userAuthRoutes.js";
import UserRoutes from "./routes/userRoutes.js";
import RecruiterAuthRoutes from "./routes/recruiterAuthRoutes.js";
import RecruiterRoutes from "./routes/recruiterRoutes.js";
import passportConfig from "./config/passport.js";

import notFoundMiddleWare from "./middlewares/not-found.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.send("welcome");
});

// app.use(notFoundMiddleWare);

const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

//The code-snippet of 'Initializing Session' below should be at this place only
app.use(session({
  secret: process.env.SOME_LONG_UNGUESSABLE_STRING,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: url })
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.set('strictQuery', false);

const start = async () => {
  try {
    await connectDB(url);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

passportConfig(passport);

app.use(UserAuthRoutes);
app.use(UserRoutes);
app.use(RecruiterAuthRoutes);
app.use(RecruiterRoutes);

start();