import * as styles from "./AboutHome.module.css";
import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import TitleBodyCell from "../Cells/TitleBodyCell";
import TitleListCell from "../Cells/TitleListCell";
import BodyCell from "../Cells/BodyCell";

export default function AboutHome() {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          contentfulAboutMe {
            id
            headerImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            information {
              ... on ContentfulBody {
                id
                text {
                  text
                  childMarkdownRemark {
                    html
                  }
                }
                sys {
                  contentType {
                    sys {
                      id
                    }
                  }
                }
              }
              ... on ContentfulTitleBodyHeader {
                id
                title
                body {
                  body
                  childMarkdownRemark {
                    html
                  }
                }
                sys {
                  contentType {
                    sys {
                      id
                    }
                  }
                }
              }
              ... on ContentfulTitleListCell {
                id
                title
                list
                sys {
                  contentType {
                    sys {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div className={styles.container + " default-body"}>
            <h2 id="about">ABOUT ME</h2>
            <div className={styles.aboutMain + " content"}>
              <div className={styles.column + " " + styles.image}>
                <Img
                  fluid={data.contentfulAboutMe.headerImage.fluid}
                  key={data.contentfulAboutMe.headerImage.fluid.src}
                  alt={data.contentfulAboutMe.headerImage.title}
                ></Img>
              </div>
              <div className={styles.column}>
                {data.contentfulAboutMe.information.map((content) => {
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
          </div>
        );
      }}
    ></StaticQuery>
  );
}
