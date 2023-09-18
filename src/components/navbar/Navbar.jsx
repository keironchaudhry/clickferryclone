import React from "react";
import styles from "./Navbar.module.css";

import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        {" "}
        <DirectionsBoatFilledIcon sx={{ marginRight: 0.5 }} />
        ClickFerry Clone
      </div>
    </div>
  );
}
