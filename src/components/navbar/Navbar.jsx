import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>ClickFerry Clone</div>
    </div>
  );
}
