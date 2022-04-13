import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import quotes from '../data/quotes';

// console.log(quotes);
function Header() {
const [currentQuote, setCurrentQuote] = useState("");


const time = 20000;  

useEffect(() => {
  setInterval(() => {
   setCurrentQuote(() => quotes[Math.floor(Math.random() * quotes.length)]);
  }, time);
  // clearInterval();
}, [])
  

    return (
        <div className="header">
          <div className="quotes">
            <p>{currentQuote.quote && currentQuote.quote}</p>
            <h5>{currentQuote.author && currentQuote.author}</h5>
          </div>
          <div className="btn-nav">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/resume">
              Resume
            </Link>
            {/* <Link className="link" to="/skills">
              Skills
            </Link>
            <Link className="link" to="/projects">
              Projects
            </Link> */}
          </div>
      </div>
    );
}

export default Header;
