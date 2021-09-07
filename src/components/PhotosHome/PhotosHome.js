import * as styles from "./PhotosHome.module.css";
import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

function getColumn(photos, offset) {
  let images = [];
  for (var i = 0 + offset; i < photos.length; i = i + 3) {
    const node = photos[i].node;
    console.log(node);
    images.push(
      <Img
        fluid={node.photo.fluid}
        key={node.photo.fluid.src}
        alt={node.photo.title}
      ></Img>
    );
  }
  return images;
}
export default function PhotosHome() {
  return (
    <StaticQuery
      query={graphql`
        query PhotosQuery {
          allContentfulPhotoPreview {
            edges {
              node {
                photo {
                  title
                  fluid {
                    ...GatsbyContentfulFluid
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
            <h2 id="photos">PHOTOS</h2>
            <div className={"content " + styles.gallery}>
              <div className={styles.column}>
                {getColumn(data.allContentfulPhotoPreview.edges, 0)}
              </div>
              <div className={styles.column}>
                {getColumn(data.allContentfulPhotoPreview.edges, 1)}
              </div>
              <div className={styles.column}>
                {getColumn(data.allContentfulPhotoPreview.edges, 2)}
              </div>
            </div>
          </div>
        );
      }}
    ></StaticQuery>
  );
}
