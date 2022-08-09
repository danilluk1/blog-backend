import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__leftContainer}>
        <div>All</div>
        <div>Developing</div>
        <div>Administrating</div>
        <div>Design</div>
        <div>Management</div>
        <div>Marketing</div>
      </div>
      <div className={styles.root__rightContainer}>
        <div className={styles.searchIcon}></div>
        <div className={styles.userIcon}></div>
      </div>
    </div>
  );
};

export default Header;
