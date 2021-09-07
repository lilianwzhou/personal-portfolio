import React from "react";
import TitleBodyCell from "./TitleBodyCell";
import TitleListCell from "./TitleListCell";
import BodyCell from "./BodyCell";

import * as styles from "./TwoColumnCell.module.css";
export default function TwoColumnCell({
  firstColumn,
  secondColumn,
  className,
}) {
  return (
    <div className={styles.grid + " " + className}>
      <div>
        {firstColumn.map((content) => {
          const contentType = content.sys.contentType.sys.id;
          if (contentType === "titleBodyHeader") {
            return (
              <TitleBodyCell
                title={content.title}
                body={content.body.body}
                md={content.body.childMarkdownRemark.html}
              ></TitleBodyCell>
            );
          } else if (contentType === "titleListCell") {
            return (
              <TitleListCell
                title={content.title}
                listElements={content.list}
              ></TitleListCell>
            );
          } else if (contentType === "body") {
            return (
              <BodyCell
                body={content.text.text}
                md={content.text.childMarkdownRemark.html}
              ></BodyCell>
            );
          } else {
            return undefined;
          }
        })}
      </div>
      <div>
        {secondColumn.map((content) => {
          const contentType = content.sys.contentType.sys.id;
          if (contentType === "titleBodyHeader") {
            return (
              <TitleBodyCell
                title={content.title}
                body={content.body.body}
                md={content.body.childMarkdownRemark.html}
              ></TitleBodyCell>
            );
          } else if (contentType === "titleListCell") {
            return (
              <TitleListCell
                title={content.title}
                listElements={content.list}
              ></TitleListCell>
            );
          } else if (contentType === "body") {
            return (
              <BodyCell
                body={content.text.text}
                md={content.text.childMarkdownRemark.html}
              ></BodyCell>
            );
          } else {
            return undefined;
          }
        })}
      </div>
    </div>
  );
}
