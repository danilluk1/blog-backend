import React from "react";
import { Post } from "../../../models/Post";
import styles from "./PostCard.module.scss";

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const {
    id,
    likes,
    dislikes,
    created_at,
    updated_at,
    author,
    avatar,
    author_name,
  } = post;

  return (
    <div className={styles.root}>
      <div className={styles.aboutPost}>
        <img src={avatar} alt="no img" />
        <div>{author_name}</div>
        <div>{created_at}</div>
      </div>

      <div className={styles.lowerBlock}>
        <div className={styles.likeIcon}></div>
        <div className={styles.disIcon}></div>
      </div>
    </div>
  );
};

export default PostCard;
