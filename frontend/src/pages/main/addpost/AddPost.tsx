import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../..";
import styles from "./AddPost.module.scss";

const AddPost = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const onClickPost = () => {

  }
  
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
          <input placeholder="Заголовок" />
          <textarea cols={40} rows={20} />
          <button onClick={onClickPost}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
