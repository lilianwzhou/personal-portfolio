import React from "react";
import BodyCell from "./Cells/BodyCell";
import TitleBodyCell from "./Cells/TitleBodyCell";
import TitleListCell from "./Cells/TitleListCell";
import TwoColumnCell from "./Cells/TwoColumnCell";
import Nav from "./Nav/Nav";
import * as styles from "./project-detail.module.css";
import SEO from "./seo";
export default function ProjectDetail({ pageContext }) {
  const { project, tab } = pageContext;
  return (
    <>
      <Nav></Nav>
      <SEO></SEO>
      <div className={" default-body"}>
        <h2>{project.title.toUpperCase()}</h2>
        <div className={styles.tabFlex}>
          {project.projectDetailPage.tabs.map(({ id, name, slug }, index) => {
            let boldness = {
              fontFamily: "AirbnbBook",
            };
            if (id === tab.id) {
              boldness = {
                fontFamily: "AirbnbBold",
              };
            }

            if (index !== project.projectDetailPage.tabs.length - 1) {
              var barMiddle = <h3>|</h3>;
            }
            return (
              <>
                <a href={project.projectDetailPage.slug + slug}>
                  <h3 key={name} style={boldness}>
                    {name}
                  </h3>
                </a>
                {barMiddle}
              </>
            );
          })}
        </div>
        <div className={styles.content}>
          {tab.items.map((content, index) => {
            const contentType = content.sys.contentType.sys.id;
            if (index === 0) {
              var classes = styles.header;
            }
            if (contentType === "titleBodyHeader") {
              return (
                <TitleBodyCell
                  className={classes}
                  title={content.title}
                  body={content.body.body}
                  md={content.body.childMarkdownRemark.html}
                ></TitleBodyCell>
              );
            } else if (contentType === "titleListCell") {
              return (
                <TitleListCell
                  className={classes}
                  title={content.title}
                  listElements={content.list}
                ></TitleListCell>
              );
            } else if (contentType === "body") {
              return (
                <BodyCell
                  className={classes}
                  body={content.text.text}
                  md={content.text.childMarkdownRemark.html}
                ></BodyCell>
              );
            } else if (contentType === "twoColumnCell") {
              return (
                <TwoColumnCell
                  className={classes}
                  firstColumn={content.firstColumn}
                  secondColumn={content.secondColumn}
                ></TwoColumnCell>
              );
            } else {
              return undefined;
            }
          })}
        </div>
      </div>
    </>
  );
}
