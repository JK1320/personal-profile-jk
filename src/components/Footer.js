import React from 'react';
import "../styleSheets/Footer.css";


const Footer = () => {
    return (
      <div className="footer">
        <ul>
          <li>kaurjus1@gmail.com</li>
          <li>
            <a
              className="footer-link"
              href="https://github.com/JK1320"
              target="_blank"
              rel="noReferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/kaur-jus/"
              target="_blank"
              rel="noReferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Footer;
