import React from "react";
import { Post } from "../../../models/Post";
import styles from "./PostCard.module.scss";

const PostCard: React.FC<Post> = (props) => {
  const {
    id,
    likes,
    dislikes,
    created_at,
    updated_at,
    author_uid,
    avatar,
    author_name,
  } = props;

  return (
    <div className={styles.root}>
      <div className={styles.aboutPost}>
        <img src={avatar} alt="no img"/>
        <div>{author_name}</div>
        <div>{created_at}</div>
      </div>
    </div>
  );
};

export default PostCard;
