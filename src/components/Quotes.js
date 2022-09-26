import React from 'react';
import { useState, useEffect } from "react";
import quotes from "../data/quotes";
import "../styleSheets/Quotes.css";


// console.log(quotes);

function Quotes() {
const [currentQuote, setCurrentQuote] = useState(quotes[6]);

const time = 10000;

useEffect(() => {
  setInterval(() => {
    setCurrentQuote(() => quotes[Math.floor(Math.random() * quotes.length)]);
  }, time);
}, []);

  return (
    <div className="container-quotes">
      <div className="quotes">
        <p>{currentQuote.quote && currentQuote.quote}</p>
        <h5>{currentQuote.author && currentQuote.author}</h5>
      </div>
    </div>
  );
}

export default Quotes;