import React from "react";
import LogoImg from "../../assets/logo/Logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <>
      <img className={styles.logo} src={LogoImg} alt="QTify" />
    </>
  );
}

export default Logo;
