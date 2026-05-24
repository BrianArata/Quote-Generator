import { useState } from "react";
import filteredQuotes from "./assets/filteredQuotes2.json"
import ryan from "./assets/Ryanv1.png"
import AJ from "./assets/AJv1.png"
import Danny from "./assets/Dannyv1.png"
import unknown from "./assets/unkown.png"
import bassboy from "./assets/bassboy.png"
import cheff from "./assets/Cheff.png"
import chrisL from "./assets/chrisL.png"
import matt from "./assets/MattC.png"
import carmine from "./assets/carmine.png"

function App() {
  const quotes = filteredQuotes

  // Mapping of author names to their image files
  const authorImages = {
  ryan: ryan,
  aj: AJ,
  danny: Danny,
  bassboy: bassboy,
  cheff: cheff,
  chris: chrisL,
  matt: matt,
  carmine: carmine,
};

  // Array of displayed quotes
  const [displayedQuote, setDisplayedQuote] = useState(null);

  function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setDisplayedQuote(quotes[randomIndex]);
  }

  function getAuthorImage() {
  if (!displayedQuote) return null;

  const normalizedAuthor =
    displayedQuote.author?.trim().toLowerCase();

  return authorImages[normalizedAuthor] || unknown;
}

  return (
    <>
      <h1 className="heading">AJ's Quote Corner</h1>
      <div className="description">Generate a random quote said by one of the goons over the years</div>
      <button onClick={getRandomQuote}>Get Random Quote</button>

      <div className="quoteBox">
        <blockquote> {displayedQuote ? displayedQuote.text : ""} </blockquote>
        <div className="citation">
          <cite> {displayedQuote?.author ? `~ ${displayedQuote.author}` : ""} </cite>
        </div>
        {/* Conditional rendering based on return from getAuthorImage() function */}
          {getAuthorImage() && (
            <img
              src={getAuthorImage()}
              alt={displayedQuote.author}
              className="authorImage"
            />
          )}
      </div>
    </>
  );
}

export default App;