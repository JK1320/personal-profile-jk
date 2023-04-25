
import { Link } from "react-router-dom";
import "../styleSheets/Navbar.css";


function Navbar() {
    

    return (
      <div className="container-navbar">
        <div className="info-nav">
          <div className="navbar-heading">
            <div className="navbar-circle"></div>
            <div>
              <Link className="navbar-h1-link" to="/">
                <h1 className="navbar-h1">Jasvir Kaur</h1>
              </Link>

              <h4>Entry Level Web Developer</h4>
            </div>
          </div>
          <div className="navbar-links">
            <Link className="link link-1" to="/resume">
              Resume
            </Link>
            <Link className="link link-2" to="/projects">
              Projects
            </Link>
            <Link className="link link-3" to="/resume">
              Contact
            </Link>
          </div>
        </div>
        <div className="btn-nav"></div>
      </div>
    );
}

export default Navbar;
