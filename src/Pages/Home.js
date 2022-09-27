import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import React from 'react'
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Quotes from "../components/Quotes";

const Home = () => {
    return (
      <div>
        <Quotes />
        <Navbar />
       
        <Skills />
        <Projects />
        <Footer />
        <ScrollToTop />
      </div>
    );
}

export default Home;


