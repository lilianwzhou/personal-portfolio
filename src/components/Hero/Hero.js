import React from "react";
import * as styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={"default-body"}>
      <div className={styles.content}>
        <h1>
          <a href="#work">Work</a>
        </h1>
        <h1>
          <a
            href="https://drive.google.com/file/d/1XItRNGNu1_HV5jo0kKFNf4g7r0EHaKwr/view"
            target="_blank"
          >
            Resume
          </a>
        </h1>
        <h1>
          <a href="#photos">Photos</a>
        </h1>
        <h1>
          <a href="#about">About</a>
        </h1>
      </div>
    </div>
  );
}
