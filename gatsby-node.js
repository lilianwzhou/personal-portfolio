const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectDetail = path.resolve(`src/components/project-detail.js`);
  const result = await graphql(`
    query WorkHomeQuery {
      allContentfulProject {
        edges {
          node {
            id
            title
            technologies
            details {
              details
            }
            projectDetailPage {
              slug
              tabs {
                id
                slug
                name
                items {
                  ... on ContentfulBody {
                    id
                    sys {
                      contentType {
                        sys {
                          id
                        }
                      }
                    }
                    text {
                      text
                      childMarkdownRemark {
                        html
                      }
                    }
                  }
                  ... on ContentfulTitleBodyHeader {
                    id
                    sys {
                      contentType {
                        sys {
                          id
                        }
                      }
                    }
                    title
                    body {
                      body
                      childMarkdownRemark {
                        html
                      }
                    }
                  }

                  ... on ContentfulTwoColumnCell {
                    id
                    sys {
                      contentType {
                        sys {
                          id
                        }
                      }
                    }
                    firstColumn {
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
                    secondColumn {
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
              }
            }
          }
        }
      }
    }
  `);
  const projects = result.data.allContentfulProject;
  projects.edges.forEach(({ node }) => {
    if (!node.projectDetailPage) {
      return;
    }

    const projectDetailPage = node.projectDetailPage;

    projectDetailPage.tabs.forEach((tab, index) => {
      if (
        index == 0 &&
        projectDetailPage.slug + "/" !== projectDetailPage.slug + tab.slug
      ) {
        createPage({
          path: `${projectDetailPage.slug + "/"}`,
          component: projectDetail,
          context: {
            project: node,
            tab: tab,
          },
        });
      }
      createPage({
        path: `${projectDetailPage.slug + tab.slug}`,
        component: projectDetail,
        context: {
          project: node,
          tab: tab,
        },
      });
    });
  });
};
