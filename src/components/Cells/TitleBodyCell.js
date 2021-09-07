import React from "react";
import * as styles from "./style.module.css";

export default function TitleBodyCell({ title, body, md, className }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <div
        className={styles.main}
        dangerouslySetInnerHTML={{
          __html: md,
        }}
      ></div>
    </div>
  );
}
