import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function SavedQuotesList({ savedQuotes }) {
  return (
    <div className="mt-4">
      <h3>Saved Quotes</h3>
      {savedQuotes.length === 0 ? (
        <p>No quotes saved yet.</p>
      ) : (
        <ul className="list-group">
          {savedQuotes.map((quote, index) => (
            <li key={index} className="list-group-item">
              {quote}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedQuotesList;
