import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../..";
import { $axios } from "../../../api/axios";
import styles from "./AddPost.module.scss";

const AddPost = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("markdown");

  const onClickPost = async () => {
    if (!user) return;

    await $axios.post("/posts", {
      postData: {
        markdown: markdown,
        title: title,
      },
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__mainContainer}>
        <div className={styles.root__mainContainer__aboutPost}>
          {user && (
            <>
              <img src={user.photoURL?.toString()} alt="no img" />
              <div>{user.displayName}</div>
              <div>{new Date().toDateString()}</div>
            </>
          )}
        </div>
        <div className={styles.root__mainContainer__postContent}>
          <input
            placeholder="Заголовок"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols={40}
            rows={20}
            onChange={(e) => setMarkdown(e.target.value)}
          />
          <button onClick={onClickPost}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
