import React from "react";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search placeholder={"Search a album of your choice"} />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
