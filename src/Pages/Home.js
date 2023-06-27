import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import techSkills from "../data/techSkills";
import softSkills from "../data/softSkills";
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
            created few projects for learning on Styled Components, Material-UI
            and MongoDB. I have recently joined CodeYourFuture Product Dev Team.
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
      <div className="skills">
        <section className="skills-section">
          <h3>Tech Skills:</h3>
          <div className="skills-card">
            {techSkills.map((language, index) => (
              <ul key={index} className="skills-container">
                <li>{language.language}</li>
                {/* <img src={language.icon} alt="icons" /> */}
              </ul>
            ))}
          </div>
        </section>
        <section className="skills-section">
          <h3>Soft Skills:</h3>
          <div className="skills-card">
            {softSkills.map((skill, index) => (
              <ul key={index} className="skills-container">
                {/* <img src={skill.icon} alt="skill" /> */}
                <li>{skill.skill}</li>
              </ul>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
