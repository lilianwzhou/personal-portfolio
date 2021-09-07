import React from "react";
import * as styles from "./Nav.module.css";
export default function Nav() {
  return (
    <div className={styles.container + " wider-body"}>
      <a href="/">
        <p>LILIAN ZHOU</p>
      </a>
    </div>
  );
}
