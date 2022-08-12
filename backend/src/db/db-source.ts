import { DataSource } from "typeorm";
import { Post } from "../models/post.model";
import { Comment } from "../models/comment.model";

export const appDataSource = new DataSource({
  // type: "postgres",
  // host: "localhost",
  // port: 5432,
  // username: "postgres",
  // password: "admin",
  // database: "blog",
  // synchronize: false, //enable this only for debugging purposes
  // logging: true,
  type: "postgres",
  host: process.env.db_host,
  port: Number(process.env.db_port),
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_name,
  synchronize: false, //enable this only for debugging purposes
  logging: true,
  entities: [Post, Comment],
});
