import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

import cors from "cors";

import admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import bodyParser from "body-parser";
import { userRouter } from "./routes/user.routes";
import { postRouter } from "./routes/post.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

admin.initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://blog-back.firebaseio.com",
});

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(bodyParser.json());
app.use(userRouter);
app.use(postRouter);
app.use(errorMiddleware);

async function entryPoint() {
  app.listen(port, () => {
    console.log(`Server startd on port ${port}`);
  });
}

entryPoint();
