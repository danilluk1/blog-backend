import React from "react";
import { $axios } from "../../api/axios";
import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  React.useEffect(() => {
    $axios.get()
  }, [])
  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        
      </div>
    </div>
  );
};

export default MainPage;
