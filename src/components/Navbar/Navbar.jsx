import React from "react";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <>
      <nav className={styles.navbar}>
        <a href="/">
          <Logo />
        </a>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
        <Button>Give Feedback</Button>
      </nav>
    </>
  );
}

export default Navbar;
