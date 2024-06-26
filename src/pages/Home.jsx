import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import FixedSocialIcon from "../components/SocialIcon/FixedSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <FixedSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
