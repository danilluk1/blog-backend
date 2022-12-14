import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Post } from "./post.model";

@Entity("comments")
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "integer",
  })
  parent_id: number;

  @Column({
    type: "varchar",
    length: 500,
  })
  text: string;

  @Column({
    type: "varchar",
    length: 64,
  })
  author_uid: string;

  @Column({
    type: "integer",
    default: 0,
  })
  likes: number;

  @Column({
    type: "integer",
    default: 0,
  })
  dislikes: number;

  @CreateDateColumn({
    type: "timestamp with time zone",
  })
  created_at: Date;

  @UpdateDateColumn({
    type: "timestamp with time zone",
  })
  updated_at: Date;

  @ManyToOne(() => Post, (post) => post.id)
  post: Relation<Post>;
}
