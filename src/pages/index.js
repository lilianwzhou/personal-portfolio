import * as React from "react";
import "../components/layout.css";
import WorkHome from "../components/WorkHome/WorkHome";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import PhotosHome from "../components/PhotosHome/PhotosHome";
import AboutHome from "../components/AboutHome/AboutHome";
import SEO from "../components/seo";
// markup
const IndexPage = () => {
  return (
    <div>
      <SEO></SEO>
      <Nav></Nav>
      <Hero></Hero>
      <WorkHome></WorkHome>
      <PhotosHome></PhotosHome>
      <AboutHome></AboutHome>
    </div>
  );
};

export default IndexPage;
