import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../..";
import styles from "./Header.module.scss";

const Header = () => {
  const { auth } = useContext(Context);
  const navigate = useNavigate();
  const onLogoutClick = () => {
    auth.signOut().then(() => {
      navigate("/register");
    });
  };
  return (
    <div className={styles.root}>
      <div className={styles.root__leftContainer}>
        <div onClick={() => navigate("/")}>All</div>
        <div>Developing</div>
        <div>Administrating</div>
        <div>Design</div>
        <div>Management</div>
        <div>Marketing</div>
      </div>
      <div className={styles.root__rightContainer}>
        <div className={styles.addIcon} onClick={() => navigate("/new")}></div>
        <div className={styles.searchIcon}></div>
        <div className={styles.userIcon}></div>
        <div className={styles.logoutIcon} onClick={onLogoutClick}></div>
      </div>
    </div>
  );
};

export default Header;
