
import { Link } from "react-router-dom";
import "../styleSheets/Navbar.css";


function Navbar() {
    

    return (
      <div className="container-navbar">
        <div class="info-nav">
          <div className="heading">
            <h1>Jasvir Kaur</h1>
            <h4>Junior Full Stack Web Developer</h4>
          </div>
          <div className="about">
            <p>
              I joined CodeYourFuture in 2020 and took a great opportunity to
              become a Full Stack Web Developer. I learned HTML/CSS,
              JavaScript(React), Node.js and PostgreSQL. Since graduating I have
              created few projects for learning on Styled Components,
              Material-UI and MongoDB. I have recently joined CodeYourFuture
              Product Dev Team.
            </p>
          </div>
        </div>
        <div className="btn-nav">
          <Link className="link" to="/resume">
            CV
          </Link>
        </div>
      </div>
    );
}

export default Navbar;
