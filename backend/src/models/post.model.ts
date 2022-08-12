import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Comment } from "./comment.model";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 64,
  })
  author: string;

  @Column({
    type: "varchar",
    length: 128,
  })
  title: string;

  @Column({
    type: "varchar",
  })
  markdown: string;

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

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Relation<Comment>;
}
