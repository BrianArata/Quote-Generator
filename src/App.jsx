import { useState } from "react";
import filteredQuotes from "./assets/filteredQuotes.json"

function App() {
  const quotes = filteredQuotes

  // Array of displayed quotes
  const [displayedQuote, setDisplayedQuote] = useState(null);


  function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setDisplayedQuote(quotes[randomIndex]);
  }


  return (
    <>
      <h1 className="heading">AJ's Quote Corner</h1>
      <div className="description">Generate a random quote said by one of the goons over the years</div>
      <button onClick={getRandomQuote}>Get Random Quote</button>

      <div className="quoteBox">
        <blockquote> {displayedQuote ? displayedQuote.text : ""} </blockquote>
        <cite> {displayedQuote?.author ? `~ ${displayedQuote.author}` : ""} </cite>
      </div>
    </>
  );
}

export default App;