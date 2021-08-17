import React, {useState, useEffect} from 'react';
import quotes from './data/quotes';

// console.log(quotes);
function Header({triggerHome, triggerLanguages, triggerProjects}) {
const [currentQuote, setCurrentQuote] = useState("");

const time = 3000;  
useEffect(() => {
  setInterval(() => {
   setCurrentQuote(() => quotes[Math.floor(Math.random() * quotes.length)]);
  }, time);
  // clearInterval();
}, [])
  
// console.log(currentQuote);
    return (
      <div className="header">
        <div className="quotes">
          <p>"{currentQuote.quote && currentQuote.quote}"</p>
          <p>-{currentQuote.author && currentQuote.author}</p>
        </div>
        <div className="btn-nav">
          <button onClick={triggerHome}>Home</button>
          <button onClick={triggerProjects}>Projects</button>
          <button onClick={triggerLanguages}>Skills</button>
        </div>
      </div>
    );
}

export default Header;
