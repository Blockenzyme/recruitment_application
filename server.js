import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";

import notFoundMiddleWare from "./middlewares/not-found.js";

const app = express();
dotenv.config();

app.get('/',(req,res) => {
    res.send('welcome');
});


app.use(notFoundMiddleWare);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();