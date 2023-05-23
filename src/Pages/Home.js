import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
//import React, {useState} from 'react'
import Footer from "../components/Footer";
//import Projects from "../components/Projects";
//import Skills from "../components/Skills";
//import Quotes from "../components/Quotes";
import "../styleSheets/Home.css";
import { Link } from "react-router-dom";

const Home = () => {


    return (
      <div className="home">
        <Navbar />
        <div className="home-about">
          <div className="home-about--img">
            <img src="/images/women-coding.jpg" alt="woman coding" />
          </div>
          <div className="home-about--me">
            <h1>Hello</h1>
            <h4>A Bit About Me</h4>
            <p>
              I joined CodeYourFuture in 2020 and took a great opportunity to
              become a Full Stack Web Developer. I learned HTML/CSS,
              JavaScript(React), Node.js and PostgreSQL. Since graduating I have
              created few projects for learning on Styled Components,
              Material-UI and MongoDB. I have recently joined CodeYourFuture
              Product Dev Team.
            </p>
            <div className="home-about-links">
              <Link className="link-about link-about-1" to="/resume">
                Resume
              </Link>
              <Link className="link-about link-about-2" to="/projects">
                Projects
              </Link>
              <Link className="link-about link-about-3" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
        {/* <Quotes /> */}
        <Footer />
        <ScrollToTop />
        {/* <Skills />
        <Projects />
        */}
      </div>
    );
}

export default Home;


