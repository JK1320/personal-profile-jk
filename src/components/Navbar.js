
import { Link } from "react-router-dom";
import "../styleSheets/Navbar.css";


function Navbar() {
    

    return (
      <div className="container-navbar">
        <div class="info-nav">
          <div className="home-intro">
            <div className="heading">
              <h1>Jasvir Kaur</h1>
              <h4>Full Stack Web Developer</h4>
            </div>
          </div>
          <div className="about">
            <p>
              I joined CodeYourFuture in 2020 and took a great opportunity to
              become a Full Stack Web Developer. I learned HTML/CSS,
              JavaScript(React), Node.js and PostgreSQL. Even though My skills
              are basic at the moment but I practice these skills every day to
              improve.
            </p>
          </div>
        </div>
        <div className="btn-nav">
        
            <Link className="link" to="/resume">
              Resume
            </Link>
         
        </div>
      </div>
    );
}

export default Navbar;
