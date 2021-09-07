import React from "react";
import * as styles from "./WorkHome.module.css";
import Collapse from "rc-collapse";
import Img from "gatsby-image";

import { StaticQuery, graphql } from "gatsby";
import "rc-collapse/assets/index.css";

export default function WorkHome(props) {
  const arrowPath =
    "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88" +
    ".5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3." +
    "6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5." +
    "2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";

  function expandIcon({ isActive }) {
    return (
      <i style={{ marginRight: ".5rem" }}>
        <svg
          viewBox="0 0 1024 1024"
          width="1em"
          height="1em"
          fill="currentColor"
          style={{
            verticalAlign: "-.125em",
            transition: "transform .2s",
            transform: `rotate(${isActive ? 90 : 0}deg)`,
          }}
        >
          <path d={arrowPath} p-id="5827" />
        </svg>
      </i>
    );
  }
  return (
    <StaticQuery
      query={graphql`
        query WorkHomeQuery {
          allContentfulProject {
            edges {
              node {
                id
                title
                technologies
                photos {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                details {
                  details
                }
                projectDetailPage {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div className={styles.container + " default-body"}>
            <h2 id="work">WORK</h2>
            <div className={"content"}>
              <Collapse
                className={styles.collapse}
                accordion={true}
                expandIcon={expandIcon}
              >
                {data.allContentfulProject.edges.map(({ node }, index) => {
                  return (
                    <Collapse.Panel
                      header={node.title}
                      headerClass={styles.panelHeader}
                      key={index}
                    >
                      <div className={styles.flexContainer}>
                        <div>
                          <h3>PROJECT DETAILS:</h3>
                          <p>{node.details.details}</p>
                          {(function () {
                            if (node.projectDetailPage) {
                              return (
                                <a href={node.projectDetailPage.slug}>
                                  <p className={styles.underline}>
                                    Read More...
                                  </p>
                                </a>
                              );
                            }
                          })()}
                        </div>
                        {(() => {
                          if (node.technologies) {
                            return (
                              <div>
                                <h3>TECHNOLOGIES:</h3>
                                <p>
                                  {node.technologies?.map((elem) => {
                                    return (
                                      <>
                                        {elem}
                                        <br></br>
                                      </>
                                    );
                                  })}
                                </p>
                              </div>
                            );
                          }
                          return undefined;
                        })()}
                      </div>
                      <div className={styles.gallery}>
                        {node.photos?.map((photo) => {
                          return (
                            <div>
                              <Img
                                fluid={photo.fluid}
                                key={photo.fluid.src}
                                alt={photo.title}
                              ></Img>
                            </div>
                          );
                        })}
                      </div>
                    </Collapse.Panel>
                  );
                })}
              </Collapse>
            </div>
          </div>
        );
      }}
    ></StaticQuery>
  );
}
