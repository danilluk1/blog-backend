import "dotenv/config";
import express from "express";
const app = express();
const port = process.env.PORT || 5000;

import cors from "cors";

import admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import bodyParser from "body-parser";
import { userRouter } from "./routes/user.routes";
import { postRouter } from "./routes/post.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { appDataSource } from "./db/db-source";

admin.initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://blog-back.firebaseio.com",
});

app.use(cors({ origin: "*", credentials: true, optionsSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use(userRouter);
app.use(postRouter);
app.use(errorMiddleware);

async function entryPoint() {
  appDataSource
    .initialize()
    .then(() => {
      console.log("Db connected");
    })
    .catch((error) => console.error(error));

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

entryPoint();
