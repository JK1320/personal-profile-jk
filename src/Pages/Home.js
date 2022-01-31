import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import React from 'react'
import Footer from "../components/Footer";

const Home = () => {
    return (
      <div className="main">
        <Header />
        <div className="home-intro">
          <div className="heading">
            <h1>Jasvir Kaur</h1>
            <h4>
              Full Stack Web Developer 
            </h4>
          </div>
        </div>
        <div className="about">
          <h3>About</h3>
          <p>
            I joined Code Your Future in 2020 and took a great opportunity to
            become a Full Stack Web Developer. I learned HTML/CSS,
            JavaScript(React), Node.js and PostgreSQL. Even though My skills are
            basics at the moment but I practice these skills every day to
            improve.
          </p>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
}

export default Home;


