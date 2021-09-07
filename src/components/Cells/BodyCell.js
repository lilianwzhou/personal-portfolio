import React from "react";
import * as styles from "./style.module.css";
export default function BodyCell({ body, md, className }) {
  return (
    <div className={styles.main + " " + className}>
      <div
        dangerouslySetInnerHTML={{
          __html: md,
        }}
      ></div>
    </div>
  );
}
