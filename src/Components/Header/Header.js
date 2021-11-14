import React from "react";

import NavBar from "../NavBar/NavBar";

import styles from './Header.module.css';

const Header = () => (
  <div>
    <header className={styles.header}>
      <div class="header__wrapper">
        <img src="logo.svg" alt="logo" class="logo" />

        <NavBar />
      </div>
    </header>
  </div>
);

export default Header;
