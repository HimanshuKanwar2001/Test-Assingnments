import React, { useState, useEffect} from "react";
import QuoteCard from "./components/QuoteCard";
import SavedQuotesList from "./components/SavedQuotesList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);
  

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0]);
      });
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
    console.log(savedQuotes)
  };

  return (
    <div className="container vh-100" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-md-9 col-lg-7 col-xl-5">
          <h1 className="text-center my-4">Ron Swanson Quotes</h1>
          <QuoteCard quote={quote} onSave={saveQuote} />
          <button className="btn btn-secondary mb-4" onClick={fetchQuote}>
            Get New Quote
          </button>
          <SavedQuotesList savedQuotes={savedQuotes} />
        </div>
      </div>
    </div>
  );
}

export default App;
