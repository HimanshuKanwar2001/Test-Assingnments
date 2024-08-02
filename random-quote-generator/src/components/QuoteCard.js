import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function QuoteCard({ quote, onSave }) {
  return (
    <div className="card shadow-2-strong mb-4" style={{ borderRadius: "10px", backgroundColor: "#fff" }}>
      <div className="card-body p-4">
        <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
          <div className="blockquote-custom-icon bg-info shadow-1-strong">
            <i className="fa fa-quote-left text-white"></i>
          </div>
          <p className="mb-0 mt-2 font-italic">{quote}</p>
        </blockquote>
        <button className="btn btn-primary mt-3" onClick={onSave}>
          Save to List
        </button>
      </div>
    </div>
  );
}



export default QuoteCard;
